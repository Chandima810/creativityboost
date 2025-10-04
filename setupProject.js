import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Progress } from "./components/ui/progress";

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

export default function CreativityApp() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6 font-sans">
      
      {/* Welcome Screen */}
      <Card className="max-w-lg mx-auto mb-6 shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-center">Creativity Pathway App</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4 text-gray-600 leading-relaxed">
            Train your creativity by aligning with your brain’s natural pathways.
          </p>
          <Button className="w-full">Start New Journey</Button>
        </CardContent>
      </Card>

      {/* Current Cycle */}
      <Card className="max-w-lg mx-auto mb-6 shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-center">Current Cycle</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 rounded-xl bg-white shadow text-center w-full">
              <h2 className="text-lg font-bold">{steps[currentStep].word}</h2>
              <p className="text-sm text-gray-600 mt-2">{steps[currentStep].description}</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
                Previous
              </Button>
              <Button onClick={nextStep} disabled={currentStep === steps.length - 1}>
                Next
              </Button>
            </div>
            <Progress value={((currentStep + 1) / steps.length) * 100} className="w-full" />
            <p className="text-center mt-2 text-gray-500 text-sm">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Discipline Training */}
      <Card className="max-w-lg mx-auto shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-center">Discipline Training</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-gray-600 text-center leading-relaxed">
            Select the discipline you want to focus your creativity on.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {["Art", "Engineering", "Medicine", "Business"].map((discipline) => (
              <Button key={discipline} variant="outline">
                {discipline}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
