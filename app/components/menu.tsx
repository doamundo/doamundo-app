import React, { useEffect, useState } from "react";
import api from "../configs/api";

function Menu() {
  const [status, setStatus] = useState({} as { message: string });

  useEffect(() => {
    const loadStatus = async () => {
      const response = await api.get("/user/status");
      setStatus(response.data);
    };
    loadStatus();
  }, []);

  return <div>{status.message}</div>;
}

export default Menu;
