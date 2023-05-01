import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type TextEditorProps = {
  value: string;
  onChange: (newValue: string) => void;
};

const TextEditor: React.FC<TextEditorProps> = ({ value, onChange }) => {
  const handleChange = (newValue: string) => {
    onChange(newValue);
  };

  return (
    <ReactQuill
      value={value}
      onChange={handleChange}
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
          ['clean'],
        ],
      }}
      placeholder="Аяллын тухай тайлбар, нэг өдрийн хөтөлбөр оруулна уу..."
    />
  );
};

export default TextEditor;
