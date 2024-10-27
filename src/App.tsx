import StyleGuide from "./StyleGuide";

export default function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-500 mb-6">To-Do List</h1>
      <StyleGuide />
    </div>
  );
}
