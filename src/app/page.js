/* eslint-disable @next/next/no-img-element */
'use client';
import { useState, useEffect } from 'react';
import { functionList } from './verifiersLogic';

export default function Home() {
  const [verifiers, setVerifiers] = useState({});
  const [firstVerifier, setFirstVerifier] = useState('');
  const [secondVerifier, setSecondVerifier] = useState('');
  const [thirdVerifier, setThirdVerifier] = useState('');
  const [fourthVerifier, setFourthVerifier] = useState('');
  const [verifiersError, setVerifiersError] = useState('');
  const [triangleResult, setTriangleResult] = useState('');
  const [squareResult, setSquareResult] = useState('');
  const [circleResult, setCircleResult] = useState('');
  const [result, setResult] = useState(null);
  const [triangleValue, setTriangleValue] = useState('');
  const [squareValue, setSquareValue] = useState('');
  const [circleValue, setCircleValue] = useState('');
  const [testNumbers, setTestNumbers] = useState('');
  const [solution, setSolution] = useState({});
  const [firstVerifierResult, setFirstVerifierResult] = useState('');
  const [secondVerifierResult, setSecondVerifierResult] = useState('');
  const [thirdVerifierResult, setThirdVerifierResult] = useState('');
  const [fourthVerifierResult, setFourthVerifierResult] = useState(undefined);

  useEffect(() => {
    let firstDigit = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    let secondDigit = Math.floor(Math.random() * (5 - 1 + 1) + 1);;
    let thirdDigit = Math.floor(Math.random() * (5 - 1 + 1) + 1);;

    // console.log(firstDigit, secondDigit, thirdDigit)
    setSolution({
      triangle: firstDigit,
      square: secondDigit,
      circle: thirdDigit,
    })
  }, []);

  const addVerifier = () => {
    event.preventDefault();

    if (firstVerifier !== '' || secondVerifier !== '' || thirdVerifier !== '' || fourthVerifier !== '') {
      setVerifiers({
        firstVerifier: firstVerifier,
        secondVerifier: secondVerifier,
        thirdVerifier: thirdVerifier,
        fourthVerifier: fourthVerifier,
      });
    } else {
      setVerifiersError('Please enter all four verifiers');
    }
  };

  const handleTriangleValue = (e) => {
    setTriangleValue(e.target.value);
  };

  const handleSquareValue = (e) => {
    setSquareValue(e.target.value);
  };

  const handleCircleValue = (e) => {
    setCircleValue(e.target.value);
  };

  const handleTriangleResult = (e) => {
    setTriangleResult(e.target.value);
  };

  const handleSquareResult = (e) => {
    setSquareResult(e.target.value);
  };

  const handleCircleResult = (e) => {
    setCircleResult(e.target.value);
  };

  const handleFirstVerifierTest = () => {
    functionList[verifiers.firstVerifier - 1](testNumbers, solution) ? setFirstVerifierResult(true) : setFirstVerifierResult(false);
  }

  const handleSecondVerifierTest = () => {
    functionList[verifiers.secondVerifier - 1](testNumbers, solution) ? setSecondVerifierResult(true) : setSecondVerifierResult(false);
  }

  const handleThirdVerifierTest = () => {
    functionList[verifiers.thirdVerifier - 1](testNumbers, solution) ? setThirdVerifierResult(true) : setThirdVerifierResult(false);
  }

  const handleFourthVerifierTest = () => {
    functionList[verifiers.fourthVerifier - 1](testNumbers, solution) ? setFourthVerifierResult(true) : setFourthVerifierResult(false);
  }

  const handleResult = () => {
    if (triangleResult == solution.triangle && squareResult == solution.square && circleResult == solution.circle) {
      setResult(true);
    } else {
      setResult(false);
    }
  };



  // console.log(solution, result, fourthVerifierResult);

  return (
    <main className='flex min-h-screen flex-col justify-center items-center p-24'>
      {Object.values(verifiers).length === 0 && (
        <div>
          <h1 className='text-4xl font-bold text-center'>Choose your verifiers</h1>
          <p className='text-red-500 text-center'>{verifiersError}</p>
          <form className='flex w-full items-center justify-center flex-col mt-20' onSubmit={addVerifier}>
            <div className='flex gap-4'>
              <input type='number' placeholder='Verifier 1' value={firstVerifier} className=' input input-bordered' onChange={(e) => setFirstVerifier(e.target.value <= 25 ? e.target.value : 25)} />
              <input type='number' placeholder='Verifier 2' value={secondVerifier} className=' input input-bordered' onChange={(e) => setSecondVerifier(e.target.value <= 25 ? e.target.value : 25)} />
              <input type='number' placeholder='Verifier 3' value={thirdVerifier} className=' input input-bordered' onChange={(e) => setThirdVerifier(e.target.value <= 25 ? e.target.value : 25)} />
              <input type='number' placeholder='Verifier 4' value={fourthVerifier} className=' input input-bordered' onChange={(e) => setFourthVerifier(e.target.value <= 25 ? e.target.value : 25)} />
            </div>
            <button className='btn btn-success mt-10' type='submit'>
              Submit
            </button>
          </form>
        </div>
      )}

      <div>
        {Object.values(verifiers).length !== 0 && (
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold text-center'>Verifiers </h1>

            {Object.keys(testNumbers).length > 0 && (
              <div className='flex flex-col mt-6 items-center gap-4'>
                <h3 className='text-xl font-semibold'>Numbers being tested</h3>
                <div className='flex gap-4'>
                  <div>
                    <img src='https://turingmachine.info/static/media/ico_bluetriangle.46d683ce64d22d400a27.svg' alt='' className='mb-4 w-5' />
                    <p>{testNumbers.triangle}</p>
                  </div>

                  <div>
                    <img src='https://turingmachine.info/static/media/ico_yellowsquare.f4b8c974306c5dd27378.svg' alt='' className='mb-4 w-[18px]' />
                    <p>{testNumbers.square}</p>
                  </div>

                  <div>
                    <img src='https://turingmachine.info/static/media/ico_purplecircle.0eb3434d30e2005802ee.svg' alt='' className='mb-4 w-5' />
                    <p>{testNumbers.circle}</p>
                  </div>
                </div>
              </div>
            )}

            <div className='flex flex-wrap gap-4 mt-5 justify-center w-full'>
              <div className='card card-compact w-96 bg-slate-800 shadow-xl'>
                <img src={`https://turingmachine.info/images/criteriacards/EN/TM_GameCards_EN-${verifiers.firstVerifier < 10 ? '0' + verifiers.firstVerifier : verifiers.firstVerifier}.png`} alt='verifier card' />
                <div className='card-body'>
                  <h2 className='card-title'>First verifier</h2>
                  {firstVerifierResult === true ? <p className='font-bold text-green-500 text-xl'>True</p> : firstVerifierResult === false ? <p className='font-bold text-red-500 text-xl'>False </p> : null}
                  <div className='card-actions justify-center'>
                    <button className='btn btn-primary' onClick={handleFirstVerifierTest}>Test this verifier</button>
                  </div>
                </div>
              </div>

              <div className='card card-compact w-96 bg-slate-800 shadow-xl'>
                <img src={`https://turingmachine.info/images/criteriacards/EN/TM_GameCards_EN-${verifiers.secondVerifier < 10 ? '0' + verifiers.secondVerifier : verifiers.secondVerifier}.png`} alt='verifier card' />
                <div className='card-body'>
                  <h2 className='card-title'>Second verifier</h2>
                  {secondVerifierResult === true ? <p className='font-bold text-green-500 text-xl'>True</p> : secondVerifierResult === false ? <p className='font-bold text-red-500 text-xl'>False </p> : null}
                  <div className='card-actions justify-center'>
                    <button className='btn btn-primary' onClick={handleSecondVerifierTest}>Test this verifier</button>
                  </div>
                </div>
              </div>

              <div className='card card-compact w-96 bg-slate-800 shadow-xl'>
                <img src={`https://turingmachine.info/images/criteriacards/EN/TM_GameCards_EN-${verifiers.thirdVerifier < 10 ? '0' + verifiers.thirdVerifier : verifiers.thirdVerifier}.png`} alt='verifier card' />
                <div className='card-body'>
                  <h2 className='card-title'>Third verifier</h2>
                  {thirdVerifierResult === true ? <p className='font-bold text-green-500 text-xl'>True</p> : thirdVerifierResult === false ? <p className='font-bold text-red-500 text-xl'>False </p> : null}
                  <div className='card-actions justify-center'>
                    <button className='btn btn-primary' onClick={handleThirdVerifierTest}>Test this verifier</button>
                  </div>
                </div>
              </div>

              <div className='card card-compact w-96 bg-slate-800 shadow-xl'>
                <img src={`https://turingmachine.info/images/criteriacards/EN/TM_GameCards_EN-${verifiers.fourthVerifier < 10 ? '0' + verifiers.fourthVerifier : verifiers.fourthVerifier}.png`} alt='verifier card' />
                <div className='card-body'>
                  <h2 className='card-title'>Fourth verifier</h2>
                  {fourthVerifierResult === true ? <p className='font-bold text-green-500 text-xl'>True</p> : fourthVerifierResult === false ? <p className='font-bold text-red-500 text-xl'>False </p> : null}
                  <div className='card-actions justify-center'>
                    <button className='btn btn-primary' onClick={handleFourthVerifierTest}>Test this verifier</button>
                  </div>
                </div>
              </div>
            </div>
            {<div className='flex justify-center mt-10 text-2xl font-bold'>
              {
                result === true ? <h1 className='text-green-500'>Congratulations, you got the code right!</h1> : result === false ? <h1 className='text-red-500'>Sorry, you got the code wrong!</h1> : null
              }
            </div>
            }
            <div className='flex gap-4 justify-center mt-10 '>
              <button className=' btn btn-neutral w-1/3' onClick={() => document.getElementById('test_numbers').showModal()}>
                Add test numbers
              </button>
              <dialog id='test_numbers' className='modal'>
                <div className='modal-box'>
                  <h3 className='font-bold text-lg text-center'>Select your test numbers!</h3>
                  <div className='modal-action'>
                    <form method='dialog' className='flex flex-col justify-center w-full'>
                      <div className='flex gap-8 justify-center items-end'>
                        <div className='join join-vertical flex flex-col'>
                          <img src='https://turingmachine.info/static/media/ico_bluetriangle.46d683ce64d22d400a27.svg' alt='' className='mb-4 w-14' />
                          <input className='join-item btn' type='radio' name='options-triangle' aria-label='1' value={1} onChange={handleTriangleValue} />
                          <input className='join-item btn' type='radio' name='options-triangle' aria-label='2' value={2} onChange={handleTriangleValue} />
                          <input className='join-item btn' type='radio' name='options-triangle' aria-label='3' value={3} onChange={handleTriangleValue} />
                          <input className='join-item btn' type='radio' name='options-triangle' aria-label='4' value={4} onChange={handleTriangleValue} />
                          <input className='join-item btn' type='radio' name='options-triangle' aria-label='5' value={5} onChange={handleTriangleValue} />
                        </div>
                        <div className='join join-vertical flex flex-col'>
                          <img src='https://turingmachine.info/static/media/ico_yellowsquare.f4b8c974306c5dd27378.svg' alt='' className='mb-4 w-12' />
                          <input className='join-item btn' type='radio' name='options-square' aria-label='1' value={1} onChange={handleSquareValue} />
                          <input className='join-item btn' type='radio' name='options-square' aria-label='2' value={2} onChange={handleSquareValue} />
                          <input className='join-item btn' type='radio' name='options-square' aria-label='3' value={3} onChange={handleSquareValue} />
                          <input className='join-item btn' type='radio' name='options-square' aria-label='4' value={4} onChange={handleSquareValue} />
                          <input className='join-item btn' type='radio' name='options-square' aria-label='5' value={5} onChange={handleSquareValue} />
                        </div>
                        <div className='join join-vertical flex flex-col'>
                          <img src='https://turingmachine.info/static/media/ico_purplecircle.0eb3434d30e2005802ee.svg' alt='' className='mb-4 w-12' />
                          <input className='join-item btn' type='radio' name='options-circle' aria-label='1' value={1} onChange={handleCircleValue} />
                          <input className='join-item btn' type='radio' name='options-circle' aria-label='2' value={2} onChange={handleCircleValue} />
                          <input className='join-item btn' type='radio' name='options-circle' aria-label='3' value={3} onChange={handleCircleValue} />
                          <input className='join-item btn' type='radio' name='options-circle' aria-label='4' value={4} onChange={handleCircleValue} />
                          <input className='join-item btn' type='radio' name='options-circle' aria-label='5' value={5} onChange={handleCircleValue} />
                        </div>
                      </div>
                      <button
                        className='btn btn-accent mt-4'
                        onClick={() =>
                          setTestNumbers({
                            triangle: triangleValue,
                            square: squareValue,
                            circle: circleValue,
                          })
                        }>
                        Select
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
              <button className='btn-accent btn w-1/3' onClick={() => document.getElementById('test_code').showModal()}>
                Test a code
              </button>
              <dialog id='test_code' className='modal'>
                <div className='modal-box'>
                  <h3 className='font-bold text-lg text-center'>Select your solution!</h3>
                  <div className='modal-action'>
                    <form method='dialog' className='flex flex-col justify-center w-full'>
                      <div className='flex gap-8 justify-center items-end'>
                        <div className='join join-vertical flex flex-col'>
                          <img src='https://turingmachine.info/static/media/ico_bluetriangle.46d683ce64d22d400a27.svg' alt='' className='mb-4 w-14' />
                          <input className='join-item btn' type='radio' name='options-triangle' aria-label='1' value={1} onChange={handleTriangleResult} />
                          <input className='join-item btn' type='radio' name='options-triangle' aria-label='2' value={2} onChange={handleTriangleResult} />
                          <input className='join-item btn' type='radio' name='options-triangle' aria-label='3' value={3} onChange={handleTriangleResult} />
                          <input className='join-item btn' type='radio' name='options-triangle' aria-label='4' value={4} onChange={handleTriangleResult} />
                          <input className='join-item btn' type='radio' name='options-triangle' aria-label='5' value={5} onChange={handleTriangleResult} />
                        </div>
                        <div className='join join-vertical flex flex-col'>
                          <img src='https://turingmachine.info/static/media/ico_yellowsquare.f4b8c974306c5dd27378.svg' alt='' className='mb-4 w-12' />
                          <input className='join-item btn' type='radio' name='options-square' aria-label='1' value={1} onChange={handleSquareResult} />
                          <input className='join-item btn' type='radio' name='options-square' aria-label='2' value={2} onChange={handleSquareResult} />
                          <input className='join-item btn' type='radio' name='options-square' aria-label='3' value={3} onChange={handleSquareResult} />
                          <input className='join-item btn' type='radio' name='options-square' aria-label='4' value={4} onChange={handleSquareResult} />
                          <input className='join-item btn' type='radio' name='options-square' aria-label='5' value={5} onChange={handleSquareResult} />
                        </div>
                        <div className='join join-vertical flex flex-col'>
                          <img src='https://turingmachine.info/static/media/ico_purplecircle.0eb3434d30e2005802ee.svg' alt='' className='mb-4 w-12' />
                          <input className='join-item btn' type='radio' name='options-circle' aria-label='1' value={1} onChange={handleCircleResult} />
                          <input className='join-item btn' type='radio' name='options-circle' aria-label='2' value={2} onChange={handleCircleResult} />
                          <input className='join-item btn' type='radio' name='options-circle' aria-label='3' value={3} onChange={handleCircleResult} />
                          <input className='join-item btn' type='radio' name='options-circle' aria-label='4' value={4} onChange={handleCircleResult} />
                          <input className='join-item btn' type='radio' name='options-circle' aria-label='5' value={5} onChange={handleCircleResult} />
                        </div>
                      </div>

                      <button className='btn btn-accent mt-4' onClick={handleResult}>
                        Test
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>

            </div>
          </div>
        )}
      </div>
    </main>
  );
}
