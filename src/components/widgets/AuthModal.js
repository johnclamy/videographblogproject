export default function AuthModal({ isVisible, onSetShowModal }) {
  const authModal = !isVisible ? null : (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-full flex flex-col mx-2">
        <button
          onClick={() => onSetShowModal(false)}
          className="text-white text-xl place-self-end"
        >
          X
        </button>
        <div className="bg-white p-2 rounded">AuthModal</div>
      </div>
    </div>
  );

  return authModal;
}