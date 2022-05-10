import React, { Component } from "react";
import Main from "./mainPage";
import Header from "./header";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Quiz from "./quiz";
import Quizes from "./quizzes";
import UserCheck from "./userCheck";
import { useParams } from "react-router-dom";


export default function MainComponent() {

      return (
    <div>
      <Header />
      <Routes>
        <Route path="/main" element={<UserCheck Comp={Main} />} />
        <Route path="/login" element={<UserCheck Comp={Login} />} />
        <Route exact path="/quizzes" element={<UserCheck Comp={Quizes} />} />
        <Route path="/quizzes/:quizId" element={<UserCheck Comp={Quiz  }  />} />
      </Routes>
    </div>
  );
}
