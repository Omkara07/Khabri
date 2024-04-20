import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const pageSize = 9;

  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(0);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0f0f0f";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const updateProgress = (progress) => {
    setProgress(progress);
  };

  const api = process.env.REACT_APP_API;

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <LoadingBar
            color="white"
            progress={progress}
            height={3}
          />
          <Navbar mode={mode} toggleMode={toggleMode}/>
          <News
            mode={mode}
            api={api}
            pageSize={pageSize}
            key="home"
            country="in"
            updateProgress={updateProgress}
            category="general"
          />
        </div>
      ),
    },
    {
      path: "/business",
      element: (
        <div>
          <LoadingBar
            color="white"
            progress={progress}
            height={3}
          />
          <Navbar mode={mode} toggleMode={toggleMode}/>
          <News
            mode={mode}
            api={api}
            pageSize={pageSize}
            key="business"
            country="in"
            updateProgress={updateProgress}
            category="business"
          />
        </div>
      ),
    },
    {
      path: "/entertainment",
      element: (
        <div>
          <LoadingBar
            color="white"
            progress={progress}
            height={3}
          />
          <Navbar mode={mode} toggleMode={toggleMode}/>
          <News
            mode={mode}
            api={api}
            pageSize={pageSize}
            key="entertainment"
            country="in"
            updateProgress={updateProgress}
            category="entertainment"
          />
        </div>
      ),
    },
    {
      path: "/general",
      element: (
        <div>
          <LoadingBar
            color="white"
            progress={progress}
            height={3}
          />
          <Navbar mode={mode} toggleMode={toggleMode}/>
          <News
            mode={mode}
            api={api}
            pageSize={pageSize}
            key="general"
            country="in"
            updateProgress={updateProgress}
            category="general"
          />
        </div>
      ),
    },
    {
      path: "/health",
      element: (
        <div>
          <LoadingBar
            color="white"
            progress={progress}
            height={3}
          />
          <Navbar mode={mode} toggleMode={toggleMode}/>
          <News
            mode={mode}
            api={api}
            pageSize={pageSize}
            key="health"
            country="in"
            updateProgress={updateProgress}
            category="health"
          />
        </div>
      ),
    },
    {
      path: "/science",
      element: (
        <div>
          <LoadingBar
            color="white"
            progress={progress}
            height={3}
          />
          <Navbar mode={mode} toggleMode={toggleMode}/>
          <News
            mode={mode}
            api={api}
            pageSize={pageSize}
            key="science"
            country="in"
            updateProgress={updateProgress}
            category="science"
          />
        </div>
      ),
    },
    {
      path: "/sports",
      element: (
        <div>
          <LoadingBar
            color="white"
            progress={progress}
            height={3}
          />
          <Navbar mode={mode} toggleMode={toggleMode}/>
          <News
            mode={mode}
            api={api}
            pageSize={pageSize}
            key="sports"
            country="in"
            updateProgress={updateProgress}
            category="sports"
          />
        </div>
      ),
    },
    {
      path: "/technology",
      element: (
        <div>
          <LoadingBar
            color="white"
            progress={progress}
            height={3}
          />
          <Navbar mode={mode} toggleMode={toggleMode}/>
          <News
            mode={mode}
            api={api}
            pageSize={pageSize}
            key="technology"
            country="in"
            updateProgress={updateProgress}
            category="technology"
          />
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
