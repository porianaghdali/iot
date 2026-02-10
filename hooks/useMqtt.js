
"use client";
import { useEffect, useRef, useState } from "react";
import mqtt from "mqtt";

export default function useMqtt() {
  const clientRef = useRef(null);
  const listenersRef = useRef([]);
  const [connected, setConnected] = useState(false);

  // اطلاعات کاربر
  const userProfile = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("userProfile")) : null;
  const username = userProfile?.user?.username;

  const getCookie = (name) => {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? match[2] : null;
  };
  const authToken = getCookie("auth");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const client = mqtt.connect("wss://192.168.30.20/ems3/ws", {
      username,
      password: authToken,
      reconnectPeriod: 1000,
    });

    client.on("connect", () => setConnected(true));
    client.on("reconnect", () => console.log("Reconnecting..."));
    client.on("close", () => setConnected(false));
    client.on("error", (err) => console.error("MQTT Error:", err));

    client.on("message", (topic, message) => {
      const msg = { destinationName: topic, payloadString: message.toString() };
      listenersRef.current.forEach((cb) => cb(msg));
    });

    clientRef.current = client;

    return () => {
      client.end(true);
    };
  }, []);

  const subscribe = (topic) => {
    if (!clientRef.current?.connected) return false;
    clientRef.current.subscribe(topic, { qos: 2 });
    return true;
  };

  const publish = (topic, payload) => {
    if (!clientRef.current?.connected) return false;
    clientRef.current.publish(
      topic,
      typeof payload === "string" ? payload : JSON.stringify(payload),
      { qos: 2 }
    );
    return true;
  };

  const onMessage = (cb) => {
    listenersRef.current.push(cb);
  };

  const offMessage = (cb) => {
    listenersRef.current = listenersRef.current.filter((fn) => fn !== cb);
  };

  return { connected, subscribe, publish, onMessage, offMessage };
}
