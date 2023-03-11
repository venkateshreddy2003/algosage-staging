import React from "react";
import logo from "./Algosage_logo2.d22e9f96513bc8bd811d.png";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function Notifications() {
  const [showAlerts, setShowAlerts] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const [showAlertsWithIcon, setShowAlertsWithIcon] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const alerts = ["blue", "green", "orange", "red"];

  return (
    <div class="relative overflow-hidden">
      <div class="bg-white pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
        <div class="mx-auto max-w-5xl lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div class="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
              <div class="lg:py-24">
                <h1 class="mt-4 text-4xl font-bold tracking-tight text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span class="block text-pink-500">Introducing </span>
                  <span class="block text-black">Landing Website</span>
                </h1>
                <p class="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Our Website will launch soon. Join the waitlist to try the
                  beta before it's publicly available.
                </p>
                <div class="mt-10 sm:mt-12"></div>
              </div>
            </div>
            <div class="mt-12 hidden lg:block">
              <img class="" src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
