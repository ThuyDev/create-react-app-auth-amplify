import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import aws_exports from "./aws-exports";
import NavigationBar from "./components/common/NavigationBar";
import useAuth from "./hooks/useAuth";
import AppRoutes from "./components/common/AppRoutes";

Amplify.configure(aws_exports);

function App(props) {
  const { signOut } = useAuth();

  return (
    <BrowserRouter>
      <div className="container mx-auto pb-6">
        <NavigationBar className="sticky top-0 bg-slate-200 dark:bg-slate-800" signOut={signOut} />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
