import React, { useEffect } from 'react';
import useAppState from '../state';

export default function Error() {
  const { errors, setErrors } = useAppState();

  const handleXClick = () => setErrors([]);
  
  useEffect(() => { console.log(errors[0]?.message, ' message from error component') }, [errors]);

  return errors?.length ? (
    <div id="bg-black opacity-50 fixed top-0 left-0 w-screen h-screen z-30" className="modal-backdrop">

      <div id="fixed top-0 left-0 w-screen h-screen z-30 flex flex-col items-center justify-center" className="modal-container">
        <div style={{height:"5vh"}}></div>

        <div className="w-5/6 max-w-lg bg-white rounded-lg text-left sticky top-0 overflow-y-scroll">
          <div className="w-full flex justify-end">
            <div className="text-gray-600 right-0 w-8 m-2 h-8 cursor-pointer" onClick={handleXClick}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </div>
          </div>
          <div className="px-8 pb-8">
            <h3 className="text-center text-3xl text-black">{errors[0].message}</h3>
            <p className="text-lg font-light"></p>
          </div>
        </div>

        <div style={{height:"20vh"}}></div>
      </div>
    </div>
  ) : null;
}
