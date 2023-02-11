import "../styles/cardField.css";
import React, { FunctionComponent, useEffect, useState } from "react";
import Modal from "react-modal";

import axios from "axios";

interface Data {
  flags: Flags;
  name: Name;
  key: number;
  i: null;
  population: string;
}

interface Name {
  common: string;
  official: string;
}
interface Flags {
  png: string;
}
export function FullInfoWindow() {
  return <div></div>;
}
