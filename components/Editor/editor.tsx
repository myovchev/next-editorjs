import React, { FunctionComponent, useEffect, useState } from "react"
import EditorJS, { ToolConstructable, ToolSettings } from "@editorjs/editorjs"
import { tools } from "./tools"

/**
 *
 * @param {EditorJS.Tool[]} toolsList
 * @param {*} param1
 * @param {EditorJS.EditorConfig} options
 */

export const useEditor = (
  toolsList: { [toolName: string]: ToolConstructable | ToolSettings<any> },
  { data, editorRef },
  options: EditorJS.EditorConfig = {}
) => {
  const [editorInstance, setEditor] = useState(null)
  const {
    data: ignoreData,
    tools: ignoreTools,
    holder: ignoreHolder,
    ...editorOptions
  } = options

  // initialize
  useEffect(() => {
    // create instance
    const editor = new EditorJS({
      /**
       * Id of Element that should contain the Editor
       */
      holder: "editor-js",

      /**
       * Available Tools list.
       * Pass Tool's class or Settings object for each Tool you want to use
       */
      tools: toolsList,

      /**
       * Previously saved data that should be rendered
       */
      data: data || {},

      initialBlock: "paragraph",

      // Override editor options
      ...editorOptions,
    })

    setEditor(editor)

    // cleanup
    return () => {
      editor.isReady
        .then(() => {
          editor.destroy()
          setEditor(null)
        })
        .catch((e) => console.error("ERROR editor cleanup", e))
    }
  }, [toolsList])

  // set reference
  useEffect(() => {
    if (!editorInstance) {
      return
    }
    // Send instance to the parent
    if (editorRef) {
      editorRef(editorInstance)
    }
  }, [editorInstance, editorRef])

  return { editor: editorInstance }
}

export const EditorContainer = ({ editorRef, children, data, options }) => {
  useEditor(tools, { data, editorRef }, options)

  return (
    <React.Fragment>
      {!children && <div className="container" id="editor-js"></div>}
      {children}
      <style jsx>{`
        .container {
          width: 100%;
          border: 1px solid #c0c0c0;
          padding: 2px 0;
        }
      `}</style>
    </React.Fragment>
  )
}
