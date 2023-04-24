import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { EDIT_PROJECT } from '../mutations/projectMutations';
import { GET_PROJECTS } from '../queries/projectQueries';

export default function EditProjectForm({ project }) {
    const [name, setName] = useState(project.name);
    const [description, setDescription] = useState(project.description);
    const [status, setStatus] = useState('');
    return (
        <div className='mt-5'>
            <h3>Update Project Details</h3>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input
                        type='text'
                        className='form-control'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea
                        className='form-control'
                        id='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Status</label>
                    <select
                        id='status'
                        className='form-select'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value='new'>Not Started</option>
                        <option value='progress'>In Progress</option>
                        <option value='completed'>Completed</option>
                    </select>
                </div>

            </form>

        </div>
    )
}
