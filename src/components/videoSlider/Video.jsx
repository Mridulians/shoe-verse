// import React from 'react';
import VideoPic from "../../assets/video_banner_desktop.webp";
import VideoMobile from "../../assets/video_banner_mobile.webp";
import Video1 from '../../assets/videos/video1.mp4';
import Video2 from '../../assets/videos/video2.mp4';
import Video3 from '../../assets/videos/video3.mp4';
import Video4 from '../../assets/videos/video4.mp4';
import Video5 from '../../assets/videos/video5.mp4';
import Video6 from '../../assets/videos/video6.mp4';
import Video7 from '../../assets/videos/video7.mp4';
import Video8 from '../../assets/videos/video8.mp4';
import './Video.css';

const Video = () => {

  const handleVideoClick = (e) => {
    const video = e.currentTarget;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div>
      <div>
        <img src={VideoPic} alt="" className="hidden md:block cursor-pointer" />
        <img
          src={VideoMobile}
          alt=""
          className="block md:hidden cursor-pointer"
        />
      </div>

      <div className="video bg-gray-100 w-[100%]">
      <div className="video flex flex-row gap-[1rem] sm:gap-[2rem] py-[2rem] m-auto items-center overflow-x-scroll w-[85%]">
          <video src={Video1} width="250" height="150" onClick={handleVideoClick} controls></video>
          <video src={Video2} width="250" height="150" onClick={handleVideoClick} controls></video>
          <video src={Video3} width="250" height="150" onClick={handleVideoClick} controls></video>
          <video src={Video4} width="250" height="150" onClick={handleVideoClick} controls></video>
          <video src={Video5} width="250" height="150" onClick={handleVideoClick} controls></video>
          <video src={Video6} width="250" height="150" onClick={handleVideoClick} controls></video>
          <video src={Video7} width="250" height="150" onClick={handleVideoClick} controls></video>
          <video src={Video8} width="250" height="150" onClick={handleVideoClick} controls></video>
        </div>
      </div>
    </div>
  );
};

export default Video;
