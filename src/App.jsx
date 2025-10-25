import HookForm from "./components/hookForm/hookForm";
import ProductManageMent from "./components/productManagement/ProductManageMent";
import SimpleForm from "./components/simpleForm/SimpleForm";

function App() {
  return (
    <div className="flex  justify-center">
      <div>
        {" "}
        <p className="text-center text-5xl m-4">explore react form</p>
        {/* <SimpleForm /> */}
        {/* <HookForm /> */}
        <ProductManageMent />
      </div>
    </div>
  );
}

export default App;
