const { addNoteHandler, getAllNotes, getNoteByIdHandler, editNotesById, deleteNoteById } = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotes
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNotesById
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteById
  }
]

module.exports = routes
