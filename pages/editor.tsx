import React, { useState } from "react"
import Head from "next/head"
import dynamic from "next/dynamic"
import {
  useSaveCallback,
  useLoadData,
  options,
  useSetData,
  useClearDataCallback,
} from "../components/Editor"

const Editor = dynamic<{
  editorRef: any
  children?: any
  data: any
  options: any
}>(
  () =>
    import("../components/Editor/editor").then((mod) => mod.EditorContainer),
  { ssr: false }
)

export default function EditorPage() {
  const [editor, setEditor] = useState(null)

  // save handler
  const onSave = useSaveCallback(editor)

  // load data
  const { data, loading } = useLoadData()

  // set saved data
  useSetData(editor, data)

  // clear data callback
  const clearData = useClearDataCallback(editor)

  const disabled = editor === null || loading

  return (
    <div className="container">
      <Head>
        <title>EditorJs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Example <a href="https://github.com/codex-team/editor.js">EditorJs</a>
        </h1>
        <p className="description">
          Hit TAB on empty line <code>for toolbar</code>, select text for{" "}
          <code>more options</code>
        </p>
        <p>
          <a href="#" onClick={clearData}>
            Clear data
          </a>
        </p>
        <div className="editorContainer">
          <Editor editorRef={setEditor} options={options} data={data} />
        </div>
        <button disabled={disabled} type="button" onClick={onSave}>
          Save &amp; see console &amp; Reload
        </button>{" "}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          NextJS is powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .editorContainer {
          width: 100%;
          margin-bottom: 10px;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        a,
        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        a:hover,
        .title a:hover,
        a:focus,
        .title a:focus,
        a:active,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .logo {
          height: 1em;
        }

        button {
          cursor: pointer;
          color: #fff !important;
          text-transform: uppercase;
          text-decoration: none;
          background: #ed3330;
          padding: 20px;
          border-radius: 5px;
          display: inline-block;
          border: none;
          transition: all 0.4s ease 0s;
        }

        button:hover,
        button:disabled {
          background: #434343;
          letter-spacing: 1px;
          -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
          -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
          box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
          transition: all 0.4s ease 0s;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
