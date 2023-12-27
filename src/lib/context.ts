"use client";
import { createContext } from "react";
import { supabaseClient } from "./dbClient";

const getSession = async () => {
  return await supabaseClient.auth.getSession();
};

export const currentUser = createContext(getSession());
