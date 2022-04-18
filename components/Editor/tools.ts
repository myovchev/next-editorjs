import Header from "@editorjs/header"
import List from "@editorjs/list"
import Paragraph from "@editorjs/paragraph"
import Embed from "@editorjs/embed"
import Table from "@editorjs/table"
import Warning from "@editorjs/warning"
import Code from "@editorjs/code"
import LinkTool from "@editorjs/link"
// import Image from '@editorjs/image'
import Raw from "@editorjs/raw"
import Quote from "@editorjs/quote"
import Marker from "@editorjs/marker"
import CheckList from "@editorjs/checklist"
import Delimiter from "@editorjs/delimiter"
import InlineCode from "@editorjs/inline-code"
import SimpleImage from "@editorjs/simple-image"

export const tools = {
  header: {
    class: Header,
    inlineToolbar: ["link"],
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  embed: Embed,
  table: Table,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  // image: Image,
  raw: Raw,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
}
