import React from 'react'

const contacts = () => {
  return (
    <fragment>
      <div className="bg-gray-100 text-purple-400 m-4 p-4 rounded-md">
        email:oii4589@naver.com ,songun1120@gamil.com
      </div>
      <div className="bg-gray-100 text-green-400 m-4 p-4 rounded-md">
        phone:010-2435-9062
      </div>
      <a
        href="https://nid.naver.com/nidlogin.login?url=https%3A%2F%2Fmail.naver.com%2F"
        className=" line-clamp-5 group rounded-lg  border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          naver{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          네이버 메일은 여기서 보내주세요.
        </p>
      </a>
      <a
        href="https://www.google.com/intl/ko/gmail/about/"
        className="line-clamp-5 group rounded-lg  border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          G-mail{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          지메일은 여기서 보내주세요.
        </p>
      </a>
    </fragment>
  )
}

export default contacts
