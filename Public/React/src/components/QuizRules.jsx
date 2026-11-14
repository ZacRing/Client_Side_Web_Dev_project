export default function QuizRules() {
  return (
    <aside className="card p-4 quiz_rules">
      <h2 className="h4">How the quiz works</h2>

      <ul>
        <li>10 questions on Irish road signs, picked at random</li>
        <li>Choose the correct sign from 4 options</li>
        <li>You have 3 minutes to finish</li>
        <li>Score 8 or more to pass</li>
        <li>Retry as many times as you need until you pass</li>
      </ul>

      <p className="rules_signs">
        <img src="/signs/stop.webp" alt="" />
        <img src="/signs/yield.webp" alt="" />
        <img src="/signs/school.webp" alt="" />
      </p>
    </aside>
  );
}