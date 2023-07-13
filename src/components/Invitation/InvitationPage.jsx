import InvitationForm from "./InvitatonForm";

function InvitationPage() {

   
  return (
    <div className="container mx-auto pb-5">
        <div>
        <h1>Invitation Form</h1>
        </div>
    <div className="grid grid-cols-4 gap-4">
      <div>&nbsp;</div>
      <div >
        <InvitationForm />
      </div>
      <div>&nbsp;</div>
    </div>
  </div>
  );
}

export default InvitationPage;
