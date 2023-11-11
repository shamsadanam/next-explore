export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl mb-2">Footer</h2>
        <p className="mb-2">
          This is a simple footer component made with Tailwind CSS.
        </p>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
