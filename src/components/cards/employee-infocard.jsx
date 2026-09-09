import React, { useState } from 'react'
import { FiPlus, FiTrash2 } from 'react-icons/fi'

const defaultNotes = [
    { id: 1, date: '09 Sep, 2026', text: 'Completed the quarterly performance review.' },
    { id: 2, date: '02 Sep, 2026', text: 'Assigned to the new inventory management project.' },
]

const EmployeeInfoCard = ({ notes = defaultNotes }) => {
    const [employeeNotes, setEmployeeNotes] = useState(notes)
    const [newNote, setNewNote] = useState('')

    const addNote = () => {
        if (!newNote.trim()) return
        setEmployeeNotes((currentNotes) => [
            ...currentNotes,
            { id: Date.now(), date: '09 Sep, 2026', text: newNote.trim() },
        ])
        setNewNote('')
    }

    return (
        <div className="card stretch stretch-full">
            <div className="card-body">
                <div className="mb-4">
                    <h5 className="fw-bold mb-1">Employee Notes</h5>
                    <span className="fs-12 text-muted">Keep notes related to this employee</span>
                </div>
                <div className="mb-4">
                    <textarea className="form-control mb-2" rows="3" value={newNote} onChange={(event) => setNewNote(event.target.value)} placeholder="Add a new note" />
                    <button type="button" className="btn btn-primary btn-sm" onClick={addNote}>
                        <FiPlus className="me-1" /> Add Note
                    </button>
                </div>
                <div className="vstack gap-3">
                    {employeeNotes.map((note) => (
                        <div key={note.id} className="border border-dashed border-gray-5 rounded p-3">
                            <div className="d-flex justify-content-between gap-3">
                                <div>
                                    <span className="fs-11 text-muted d-block mb-1">{note.date}</span>
                                    <p className="mb-0">{note.text}</p>
                                </div>
                                <button type="button" className="avatar-text avatar-md text-danger border-0 bg-transparent" title="Delete note" onClick={() => setEmployeeNotes((currentNotes) => currentNotes.filter((item) => item.id !== note.id))}>
                                    <FiTrash2 />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmployeeInfoCard
