import Button from "./Components/Button/Button";
import Card from "./Components/Card/Card";
import Table from "./Components/Table/Table";


const students = [
  { Name: "Sara", Age: 22, City: "Cairo" },
  { Name: "Omar", Age: 24, City: "Giza" },
  { Name: "Mona", Age: 21, City: "Alexandria" },
];

function App() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex gap-4">
        <Button text="Save" variant="primary" onClick={() => alert("Saved!")} />
        <Button text="Delete" variant="danger" onClick={() => alert("Deleted!")} />
        <Button text="Disabled" variant="secondary" onClick={() => {}} disabled />
      </div>

      <div className="flex gap-4">
        <Card
          title="React Course"
          description="Learn components, props and state."
          image="https://picsum.photos/400/200"
        >
          <Button text="Enroll" variant="success" onClick={() => alert("Enrolled!")} />
        </Card>

        <Card
          title="TypeScript"
          description="Add types to your JavaScript."
        />
      </div>

      <Table columns={["Name", "Age", "City"]} data={students} striped />
    </div>
  );
}

export default App;