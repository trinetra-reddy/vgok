import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import { FontSize } from "@/extensions/FontSize";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
  Undo2,
  Redo2,
  Link2,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";

const fontSizes = ["12px", "14px", "16px", "18px", "24px", "32px"];
const fontFamilies = ["Arial", "Courier New", "Times New Roman", "Georgia"];

export default function RichTextEditor({
  name = "description",
  defaultValue = "",
  readOnly = false,
}: {
  name?: string;
  defaultValue?: string;
  readOnly?: boolean;
}) {
  const { setValue, watch } = useFormContext();
  const [showHtml, setShowHtml] = useState(false);
  const [selectedSize, setSelectedSize] = useState("16px");
  const [selectedFont, setSelectedFont] = useState("Arial");

  const currentValue  = watch(name);

  const editor = useEditor({
    editable: !readOnly,
    content: currentValue || defaultValue,
    extensions: [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
        listItem: false,
      }),
      BulletList,
      OrderedList,
      ListItem,
      TextStyle,
      FontSize,
      Color,
      Link,
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    onUpdate({ editor }) {
      const html = editor.getHTML();
      setValue(name, html, { shouldValidate: true, shouldDirty: true });
    },
  });

    useEffect(() => {
    if (editor && currentValue && currentValue !== editor.getHTML()) {
      editor.commands.setContent(currentValue);
    }
  }, [currentValue]);

  const applyFontSize = (size: string) => {
    setSelectedSize(size);
    editor?.chain().focus().setFontSize(size).run();
  };

  const applyFontFamily = (font: string) => {
    setSelectedFont(font);
    editor?.chain().focus().setMark("textStyle", { fontFamily: font }).run();
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">Description</label>

      {!readOnly && (
        <div className="flex flex-wrap gap-2 border border-gray-300 border-b-0 mb-0 p-2 rounded-t bg-white dark:bg-gray-800">
          <button type="button" onClick={() => editor?.chain().focus().toggleBold().run()} className="btn">
            <Bold size={16} />
          </button>
          <button type="button" onClick={() => editor?.chain().focus().toggleItalic().run()} className="btn">
            <Italic size={16} />
          </button>
          <button type="button" onClick={() => editor?.chain().focus().toggleUnderline().run()} className="btn">
            <UnderlineIcon size={16} />
          </button>
          <button type="button" onClick={() => editor?.chain().focus().setTextAlign("left").run()} className="btn">
            <AlignLeft size={16} />
          </button>
          <button type="button" onClick={() => editor?.chain().focus().setTextAlign("center").run()} className="btn">
            <AlignCenter size={16} />
          </button>
          <button type="button" onClick={() => editor?.chain().focus().setTextAlign("right").run()} className="btn">
            <AlignRight size={16} />
          </button>
          <button type="button" onClick={() => editor?.chain().focus().toggleBulletList().run()} className="btn">
            <List size={16} />
          </button>
          <button type="button" onClick={() => editor?.chain().focus().toggleOrderedList().run()} className="btn">
            <ListOrdered size={16} />
          </button>
          <select value={selectedSize} onChange={(e) => applyFontSize(e.target.value)} className="btn text-sm">
            <option disabled>Font Size</option>
            {fontSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <select value={selectedFont} onChange={(e) => applyFontFamily(e.target.value)} className="btn text-sm">
            <option disabled>Font Family</option>
            {fontFamilies.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => {
              const url = prompt("Enter URL");
              if (url) editor?.chain().focus().setLink({ href: url }).run();
            }}
            className="btn"
          >
            <Link2 size={16} />
          </button>
          <button type="button" onClick={() => editor?.chain().focus().undo().run()} className="btn">
            <Undo2 size={16} />
          </button>
          <button type="button" onClick={() => editor?.chain().focus().redo().run()} className="btn">
            <Redo2 size={16} />
          </button>
          <button type="button" onClick={() => setShowHtml(!showHtml)} className="btn">
            HTML
          </button>
        </div>
      )}

      {!showHtml ? (
        <div className="border border-gray-300 rounded-b p-2 p-t-0 min-h-[150px]">
          <EditorContent editor={editor} />
        </div>
      ) : (
        <textarea
          className="w-full border border-gray-300 rounded p-2 min-h-[150px] font-mono text-sm"
          value={editor?.getHTML() || ""}
          readOnly
        />
      )}
    </div>
  );
}
