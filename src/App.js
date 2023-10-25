import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div>
      <div>
        <div className="flex justify-center items-center h-screen">
          <button
            className="bg-green-400 text-white text-xl rounded p-4 font-bold"
            onClick={openPopup}
          >
            Open Popup
          </button>
        </div>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="absolute inset-0 bg-black opacity-75"
              onClick={closePopup}
            ></div>
            <div className="bg-white p-8 rounded-lg shadow-md z-10">
              <div className="flex justify-end">
                <div className="inline-block ">
                  <div className="border-2 border-black rounded-full w-10 h-10 flex items-center justify-center">
                    <button
                      className="text-2xl font-semibold"
                      onClick={closePopup}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
              <p>
                This is your popup content.This is your popup content.This is
                your popup content.This is your popup content.This is your popup
                content.This is your popup content.This is your popup content.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
