import ChecklistForm from "./ChecklistForm";

export default function ChecklistPage(){

    return (
        <div className="container mx-auto pb-5">
      <div>
        <h1>Visitor Checklist</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>&nbsp;</div>
        <div>
         <ChecklistForm/>
        </div>
        <div>&nbsp;</div>
      </div>
    </div>
    )
}
