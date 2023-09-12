import React from "react";

import PhotoGallery from "./Components/PhotoGallery/PhotoGallery";
import AboutMe from "./Components/AboutMe/AboutMe";
import CSSFeatureVideo from "./Components/CSSFeatureVideo/CSSFeatureVideo";
import "./App.css";
import RepositoryLink from "./Components/RepositoryLink/RepositoryLink";

function App() {
  return (
    <div className="App">
      <h1>Яндекс.Практикум</h1>

      <PhotoGallery />
      <AboutMe />
      <RepositoryLink />
      <CSSFeatureVideo
        url="../../assets/css_video_1.mp4"
        title="Многоточие..."
        description="Часто есть необходимо отображать многоточие и сокращать текст когда он не влазит в необходимый размер блока, тут мы решаем эту проблему."
      />
      <CSSFeatureVideo
        url="../../assets/css_video_2.mp4"
        title="Режимы наложения (смешивания)"
        description="В этом примере мы задаем изображение и заголовок в виде текста. Текст это тот элемент, который смешивается с изображением."
      />
    </div>
  );
}

export default App;
