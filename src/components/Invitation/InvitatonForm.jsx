import { useState } from "react";

export default function InvitationForm() {
  const [invite, setInvite] = useState("");
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  return (
    <form className="form-control w-full max-w-xs">
      <div>
        <label className="label">
          <span className="label-text">Insert Email to invite</span>
        </label>
        <input
          type="text"
          placeholder="example@mail.com"
          value={invite}
          onChange={(e) => setInvite(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Meeting Time</span>
        </label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Date</span>
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <div className="pt-4">
        <button className="btn btn-active btn-accent">Send Invitation</button>
      </div>
    </form>
  );
}
