import React, { Activity } from "react";

export default function ActivityTag() {
  const [firstTextBox_visibilty, setFirstTextBoxVisibility] =
    React.useState(true);
  const [secondTextBox_visibilty, setSecondTextBoxVisibility] =
    React.useState(true);

  return (
    <>
      <div className="mx-auto w-75">
        <h2>Activity Tag Example</h2>
        <div>
          <span>
            Before Activity tag, the child component state is lost after making
            it diasabled / hide as we seen in first box. But with Activity tag
            the state will be preserved even if we hide the child component as
            shown in below second box.
          </span>
          <br />
          <span>
            <b>Use cases</b> are like forms where user entered data should not
            be lost like multi page forms,if we navigate between tabs/pages the
            entered data should be preserved. this tag will handled all logic
            behind to hold the state of child component.
          </span>
        </div>
        <div className="d-flex flex-row gap-5 ">
          <div className="border border-secondary border-4 w-50">
            <h4>Without Activity Tag</h4>
            <button
              onClick={() => setFirstTextBoxVisibility(!firstTextBox_visibilty)}
            >
              Toggle
            </button>
            {firstTextBox_visibilty ? <TextBox /> : null}
          </div>
          <div className="border border-secondary border-4 w-50">
            <h4>With Activy Tag</h4>
            <button
              onClick={() =>
                setSecondTextBoxVisibility(!secondTextBox_visibilty)
              }
            >
              Toggle
            </button>
            <Activity mode={secondTextBox_visibilty ? "visible" : "hidden"}>
              <TextBox />
            </Activity>
          </div>
        </div>
      </div>
    </>
  );
}

function TextBox() {
  return (
    <>
      <form>
        <label>Text Comments:</label>
        <br />
        <textarea
          id="comments"
          name="user_comments"
          rows={5}
          cols={40}
          placeholder="Enter your comments here..."
        />
        <br />
      </form>
    </>
  );
}
