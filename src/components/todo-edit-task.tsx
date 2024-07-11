

export function TodoEditTask(){


    
        return (
            <div className="bg-danger p-3 card w-25 ">
                <h2>Edit Task 👍</h2>
                <form className="">
                    <dl>
                        
                        <dt>Title</dt>
                        <dd><input type="text"  name="Title" /></dd>
                        <dt>Description</dt>
                        <dd><textarea rows={4} cols={40}  name="Description"></textarea></dd>
                        <dt>Date</dt>
                        <dd><input type="date" name="Date" /></dd>
                    </dl>
                    <button type="submit" className="btn btn-success">Save</button>
                </form>
            </div>
        )
    }