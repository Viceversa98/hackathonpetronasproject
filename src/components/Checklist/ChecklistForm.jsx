export default function ChecklistForm() {
  return (
    <div>
      <form>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Proper Attire ?</span>
            <input type="checkbox" checked="checked" className="checkbox" />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Has Bad History with Petronas ?</span>
            <input type="checkbox" checked="checked" className="checkbox" />
          </label>
        </div>
      </form>
    </div>
  );
}
