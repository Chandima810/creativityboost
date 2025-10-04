import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Progress } from './components/ui/progress';

const steps = [
  { word: "Misfit", description: "Identify the burden, gap, or friction. Brain: ACC + PFC." },
  { word: "Recall", description: "Retrieve past experiences and knowledge. Brain: Hippocampus + Temporal Lobes." },
  { word: "Flow", description: "Open mental space for free associations. Brain: DMN." },
  { word: "Wide Path", description: "Expand connections, explore possibilities. Brain: DMN + Temporal Lobes." },
  { word: "Spark", description: "New idea emerges. Brain: Temporal Lobes + Hippocampus." },
  { word: "Strategic Flow", description: "Shape and prototype ideas with momentum. Brain: Parietal Lobes." },
  { word: "Narrow Path", description: "Evaluate and focus ideas. Brain: ECN + PFC." },
  { word: "Bright Spark", description: "Refined, strong idea. Brain: PFC + Temporal cross-links." },
  { word: "Ahh!", description: "Insight, dopamine reward, motivation. Brain: Dopamine system." }
];

export default function CreativityAppPrototype() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6 font-sans">
      <Card className="max-w-lg mx-auto mb-6 shadow-xl rounded-2xl transition-all duration-500 ease-out transform hover:scale-[1.01]">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-center tracking-wide">
            Creativity Pathway App
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4 text-gray-600 leading-relaxed">
            Train your creativity by aligning with your brain’s natural pathways.
          </p>
          <Button className="w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            Start New Journey
          </Button>
        </CardContent>
      </Card>

      <Card className="max-w-lg mx-auto mb-6 shadow-lg rounded-2xl transition-all duration-500 ease-out transform hover:scale-[1.01]">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-center tracking-wide">
            Current Cycle
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 rounded-xl bg-white shadow text-center w-full transition-transform duration-300 hover:scale-[1.02]">
              <h2 className="text-lg font-bold">{steps[currentStep].word}</h2>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {steps[currentStep].description}
              </p>
            </div>

            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow"
              >
                Previous
              </Button>
              <Button
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
                className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow"
              >
                Next
              </Button>
            </div>

            <Progress
              value={((currentStep + 1) / steps.length) * 100}
              className="w-full h-2 rounded-full bg-gray-200"
            />
            <p className="text-center mt-2 text-gray-500 text-sm">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="max-w-lg mx-auto shadow-lg rounded-2xl transition-all duration-500 ease-out transform hover:scale-[1.01]">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-center tracking-wide">
            Discipline Training
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-gray-600 text-center leading-relaxed">
            Select the discipline you want to focus your creativity on.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {["Art", "Engineering", "Medicine", "Business"].map((discipline) => (
              <Button
                key={discipline}
                variant="outline"
                className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-300 hover:from-indigo-50 hover:to-purple-50 hover:scale-105 hover:border-indigo-300"
              >
                {discipline}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}