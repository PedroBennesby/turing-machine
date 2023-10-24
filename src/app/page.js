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
  const [firstVerifierResult, setFirstVerifierResult] = useState(undefined);
  const [secondVerifierResult, setSecondVerifierResult] = useState(undefined);
  const [thirdVerifierResult, setThirdVerifierResult] = useState(undefined);
  const [fourthVerifierResult, setFourthVerifierResult] = useState(undefined);
  const [puzzleCode, setPuzzleCode] = useState('');
  const [puzzleInfo, setPuzzleInfo] = useState({});
  const [loading, setLoading] = useState(false);



  const handleApi = () => {
    event.preventDefault();
    setLoading(true);
    fetch(`https://turingmachine.info/api/api.php?h=${puzzleCode.replace('#', '')}`)
      .then((response) => response.json())
      .then((data) => {
        setPuzzleInfo({
          solution: {
            triangle: data.code.toString().split('')[0],
            square: data.code.toString().split('')[1],
            circle: data.code.toString().split('')[2],
          },
          verifiers: data.ind,
          code: data.hash
        }
        )
      }).then(() => setLoading(false));
  }

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
    functionList[puzzleInfo.verifiers[0] - 1](testNumbers, puzzleInfo.solution) ? setFirstVerifierResult(true) : setFirstVerifierResult(false);
  }

  const handleSecondVerifierTest = () => {
    functionList[puzzleInfo.verifiers[1] - 1](testNumbers, puzzleInfo.solution) ? setSecondVerifierResult(true) : setSecondVerifierResult(false);
  }

  const handleThirdVerifierTest = () => {
    functionList[puzzleInfo.verifiers[2] - 1](testNumbers, puzzleInfo.solution) ? setThirdVerifierResult(true) : setThirdVerifierResult(false);
  }

  const handleFourthVerifierTest = () => {
    functionList[puzzleInfo.verifiers[3] - 1](testNumbers, puzzleInfo.solution) ? setFourthVerifierResult(true) : setFourthVerifierResult(false);
  }

  const handleResult = () => {
    if (triangleResult == puzzleInfo.solution.triangle && squareResult == puzzleInfo.solution.square && circleResult == puzzleInfo.solution.circle) {
      setResult(true);
    } else {
      setResult(false);
    }
  };

  const handletestCodes = () => {
    setTestNumbers({
      triangle: triangleValue,
      square: squareValue,
      circle: circleValue,
    })

    setFirstVerifierResult(undefined);
    setSecondVerifierResult(undefined);
    setThirdVerifierResult(undefined);
    setFourthVerifierResult(undefined);
  }



  console.log(puzzleInfo.solution, result, puzzleInfo);

  return (
    <main className='flex min-h-screen flex-col justify-center items-center p-24'>
      {Object.values(puzzleInfo).length === 0 && (
        <div>
          <h1 className='text-4xl font-bold text-center'>Insira seu código (#)</h1>
          <p className='text-red-500 text-center'>{verifiersError}</p>
          <form className='flex w-full items-center justify-center flex-col mt-10' onSubmit={handleApi}>
            <div className='flex gap-4'>
              {/* <input type='number' placeholder='Verifier 1' value={firstVerifier} className=' input input-bordered' onChange={(e) => setFirstVerifier(e.target.value <= 25 ? e.target.value : 25)} />
              <input type='number' placeholder='Verifier 2' value={secondVerifier} className=' input input-bordered' onChange={(e) => setSecondVerifier(e.target.value <= 25 ? e.target.value : 25)} />
              <input type='number' placeholder='Verifier 3' value={thirdVerifier} className=' input input-bordered' onChange={(e) => setThirdVerifier(e.target.value <= 25 ? e.target.value : 25)} />
              <input type='number' placeholder='Verifier 4' value={fourthVerifier} className=' input input-bordered' onChange={(e) => setFourthVerifier(e.target.value <= 25 ? e.target.value : 25)} /> */}
              <input type="text" className='input input-bordered' value={puzzleCode} onChange={e => setPuzzleCode(e.target.value)} />
            </div>
            <button className='btn btn-accent mt-10' type='submit'>
              {loading ? <span className="loading loading-dots loading-lg" /> : 'Iniciar'}
            </button>

          </form>
        </div>
      )}

      <div>
        {Object.values(puzzleInfo).length !== 0 && (
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold text-center'>Verificadores #{puzzleInfo.code} </h1>

            {Object.keys(testNumbers).length > 0 && (
              <div className='flex flex-col mt-6 items-center gap-4'>
                <h3 className='text-xl font-semibold'>Números sendo testados</h3>
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
                <img src={`https://turingmachine.info/images/criteriacards/BR/TM_GameCards_BR-${puzzleInfo.verifiers[0] < 10 ? '0' + puzzleInfo.verifiers[0] : puzzleInfo.verifiers[0]}.png`} alt='verifier card' />
                <div className='card-body'>
                  <h2 className='card-title'>A</h2>
                  {firstVerifierResult === true ? <p className='font-bold text-green-500 text-xl'>Verdadeiro</p> : firstVerifierResult === false ? <p className='font-bold text-red-500 text-xl'> Falso </p> : null}
                  <div className='card-actions justify-center'>
                    <button className='btn btn-primary' onClick={handleFirstVerifierTest}>Teste esse verificador</button>
                  </div>
                </div>
              </div>

              <div className='card card-compact w-96 bg-slate-800 shadow-xl'>
                <img src={`https://turingmachine.info/images/criteriacards/BR/TM_GameCards_BR-${puzzleInfo.verifiers[1] < 10 ? '0' + puzzleInfo.verifiers[1] : puzzleInfo.verifiers[1]}.png`} alt='verifier card' />
                <div className='card-body'>
                  <h2 className='card-title'>B</h2>
                  {secondVerifierResult === true ? <p className='font-bold text-green-500 text-xl'>Verdadeiro</p> : secondVerifierResult === false ? <p className='font-bold text-red-500 text-xl'> Falso </p> : null}
                  <div className='card-actions justify-center'>
                    <button className='btn btn-primary' onClick={handleSecondVerifierTest}>Teste esse verificador</button>
                  </div>
                </div>
              </div>

              <div className='card card-compact w-96 bg-slate-800 shadow-xl'>
                <img src={`https://turingmachine.info/images/criteriacards/BR/TM_GameCards_BR-${puzzleInfo.verifiers[2] < 10 ? '0' + puzzleInfo.verifiers[2] : puzzleInfo.verifiers[2]}.png`} alt='verifier card' />
                <div className='card-body'>
                  <h2 className='card-title'>C</h2>
                  {thirdVerifierResult === true ? <p className='font-bold text-green-500 text-xl'>Verdadeiro</p> : thirdVerifierResult === false ? <p className='font-bold text-red-500 text-xl'> Falso </p> : null}
                  <div className='card-actions justify-center'>
                    <button className='btn btn-primary' onClick={handleThirdVerifierTest}>Teste esse verificador</button>
                  </div>
                </div>
              </div>

              <div className='card card-compact w-96 bg-slate-800 shadow-xl'>
                <img src={`https://turingmachine.info/images/criteriacards/BR/TM_GameCards_BR-${puzzleInfo.verifiers[3] < 10 ? '0' + puzzleInfo.verifiers[3] : puzzleInfo.verifiers[3]}.png`} alt='verifier card' />
                <div className='card-body'>
                  <h2 className='card-title'>D</h2>
                  {fourthVerifierResult === true ? <p className='font-bold text-green-500 text-xl'>Verdadeiro</p> : fourthVerifierResult === false ? <p className='font-bold text-red-500 text-xl'>Falso </p> : null}
                  <div className='card-actions justify-center'>
                    <button className='btn btn-primary' onClick={handleFourthVerifierTest}>Teste esse verificador</button>
                  </div>
                </div>
              </div>
            </div>
            {<div className='flex justify-center mt-10 text-2xl font-bold'>
              {
                result === true ? <h1 className='text-green-500'>Parabéns, você acertou o código!</h1> : result === false ? <h1 className='text-red-500'>Desculpe, esse não é o código certo!</h1> : null
              }
            </div>
            }
            <div className='flex gap-4 justify-center mt-10 '>
              <button className=' btn btn-neutral w-1/4' onClick={() => document.getElementById('test_numbers').showModal()}>
                Adicionar números para teste
              </button>
              <dialog id='test_numbers' className='modal'>
                <div className='modal-box'>
                  <h3 className='font-bold text-lg text-center'>Selecione os números para teste</h3>
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
                        onClick={
                          handletestCodes
                        }>
                        Selecione
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
              <button className='btn-accent btn w-1/4' onClick={() => document.getElementById('test_code').showModal()}>
                Testar uma solução
              </button>
              <dialog id='test_code' className='modal'>
                <div className='modal-box'>
                  <h3 className='font-bold text-lg text-center'>Selecione sua solução!</h3>
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
                        Testar
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>

              <button className='btn-warning btn w-1/4' onClick={() => document.getElementById('solution').showModal()}>
                Solução
              </button>
              <dialog id='solution' className='modal'>
                <div className='modal-box'>
                  <div className='modal-action'>
                    <form method='dialog' className='flex flex-col justify-center w-full'>
                      <div className='flex gap-8 justify-center items-end'>
                        <div className='flex flex-col mt-6 items-center gap-4'>
                          <h3 className='text-xl font-semibold'>Solução</h3>
                          <div className='flex gap-4'>
                            <div className='flex flex-col justify-center items-center'>
                              <img src='https://turingmachine.info/static/media/ico_bluetriangle.46d683ce64d22d400a27.svg' alt='' className='mb-4 w-5' />
                              <p>{puzzleInfo.solution.triangle}</p>
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                              <img src='https://turingmachine.info/static/media/ico_yellowsquare.f4b8c974306c5dd27378.svg' alt='' className='mb-4 w-[18px]' />
                              <p>{puzzleInfo.solution.square}</p>
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                              <img src='https://turingmachine.info/static/media/ico_purplecircle.0eb3434d30e2005802ee.svg' alt='' className='mb-4 w-5' />
                              <p>{puzzleInfo.solution.circle}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button className='btn btn-accent mt-14'>
                        Fechar
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
