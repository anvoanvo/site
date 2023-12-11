'use client'

import Link from 'next/link'
import React from 'react'
import YouTube from 'react-youtube'

const aboutme = () => {
  return (
    <>
      <h1 className="text-sky-400 text-2xl font-bold m-4">ABOUT ME</h1>

      <div className="bg-gray-600 p-4 m-4 rounded-lg mb-4">
        <a className="text-xl text-red-300 font-bold">Introduce</a>
        <p className="text-green-300">
          안녕하세요. 중부대학교 2학년에 재학중인 김승언이라고 합니다. 아직 많이
          부족한 실력이지만 최대한 열심히 배우려고 노력하고 있습니다. 잘
          부탁드립니다.
        </p>
      </div>

      <div className="bg-gray-600 p-4 m-4 rounded-lg mb-4">
        <a className="text-xl text-blue-700 font-bold">Personality</a>
        <p>
          제 mbti는 INTP이고 평소엔 조용히 있고 가만히 멍때리는 것을 좋아합니다.
          혹시 mbti를 모르는 분들을 위해 아래있는 노란색 버튼을 클릭하시면 검사
          페이지로 이동합니다.
        </p>
      </div>

      <div className="bg-gray-600 p-4 m-4 rounded-lg mb-4">
        <Link
          href="https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC"
          className="text-xl text-yellow-300 font-bold"
        >
          MBTI
        </Link>
        <p></p>
      </div>
      <div className="bg-gray-600 p-4 m-4 rounded-lg mb-4">
        <a className="text-xl text-red-800 font-bold">Projects</a>
        <p>
          팀프로젝트(김승언,유혁준,신준혁,박서진) 진행중이거나 마친 게임의
          전적을 검색하는 웹사이트를 제작했습니다. 진행률을 확인하시려면
          홈페이지에서 projects 탭을 클릭해주세요.
        </p>
        <YouTube videoId="RJ1ita6JrMo" />
      </div>
    </>
  )
}

export default aboutme
