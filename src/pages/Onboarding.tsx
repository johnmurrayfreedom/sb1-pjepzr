import React, { useState } from 'react';
import { StepOne } from '../components/onboarding/StepOne';
import { StepTwo } from '../components/onboarding/StepTwo';
import { StepThree } from '../components/onboarding/StepThree';
import { StepFour } from '../components/onboarding/StepFour';

export function Onboarding() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: '',
    role: '',
    selectedHabits: [] as string[],
    reminderTimes: [] as string[]
  });

  const updateUserData = (data: Partial<typeof userData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne userData={userData} onUpdate={updateUserData} onNext={nextStep} />;
      case 2:
        return <StepTwo userData={userData} onUpdate={updateUserData} onNext={nextStep} onBack={prevStep} />;
      case 3:
        return <StepThree userData={userData} onUpdate={updateUserData} onNext={nextStep} onBack={prevStep} />;
      case 4:
        return <StepFour userData={userData} onUpdate={updateUserData} onNext={nextStep} onBack={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {renderStep()}
      </div>
    </div>
  );
}