// src/components/Admin/DeleteEmployeeButton.jsx
import React, { useState } from 'react';
import { Trash2, AlertTriangle, X } from 'lucide-react';

const DeleteEmployeeButton = ({ employee, onDelete }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [confirmText, setConfirmText] = useState('');

  const handleDeleteClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = async () => {
    if (confirmText !== employee.name) {
      alert(`Please type "${employee.name}" to confirm deletion`);
      return;
    }

    setIsDeleting(true);
    try {
      await onDelete(employee.id);
      setShowConfirmModal(false);
      setConfirmText('');
    } catch (error) {
      console.error('Error deleting employee:', error);
      alert('Failed to delete employee. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCancel = () => {
    setShowConfirmModal(false);
    setConfirmText('');
  };

  return (
    <>
      {/* Delete Button */}
      <button
        onClick={handleDeleteClick}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 transition-colors"
        title="Delete Employee"
      >
        <Trash2 size={16} />
        <span className="hidden sm:inline">Delete</span>
      </button>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#2C2C2C] rounded-xl max-w-md w-full p-6 shadow-2xl border-2 border-red-500">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-red-500 p-2 rounded-full">
                  <AlertTriangle className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Delete Employee</h2>
                  <p className="text-gray-400 text-sm">This action cannot be undone</p>
                </div>
              </div>
              <button
                onClick={handleCancel}
                disabled={isDeleting}
                className="text-gray-400 hover:text-white transition-colors disabled:opacity-50"
              >
                <X size={24} />
              </button>
            </div>

            {/* Employee Info */}
            <div className="bg-[#3A3A3A] p-4 rounded-lg mb-4">
              <p className="text-white mb-2">
                <span className="text-gray-400">Name:</span> <span className="font-semibold">{employee.name}</span>
              </p>
              <p className="text-white mb-2">
                <span className="text-gray-400">Email:</span> {employee.email}
              </p>
              <p className="text-white mb-2">
                <span className="text-gray-400">Employee ID:</span> {employee.id}
              </p>
              <p className="text-white">
                <span className="text-gray-400">Tasks:</span> {employee.tasks?.length || 0} task(s)
              </p>
            </div>

            {/* Warning */}
            <div className="bg-red-900 bg-opacity-20 border border-red-500 p-3 rounded-lg mb-4">
              <p className="text-red-300 text-sm">
                <strong>Warning:</strong> Deleting this employee will permanently remove:
              </p>
              <ul className="text-red-300 text-sm mt-2 ml-4 list-disc">
                <li>Employee account and profile</li>
                <li>All assigned tasks ({employee.tasks?.length || 0})</li>
                <li>Task history and statistics</li>
              </ul>
            </div>

            {/* Confirmation Input */}
            <div className="mb-4">
              <label className="text-white text-sm mb-2 block">
                Type <span className="font-bold text-red-400">{employee.name}</span> to confirm:
              </label>
              <input
                type="text"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                disabled={isDeleting}
                placeholder={`Type "${employee.name}" here`}
                className="w-full bg-[#3A3A3A] text-white border-2 border-gray-600 focus:border-red-500 rounded-lg px-3 py-2 outline-none transition-colors disabled:opacity-50"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleCancel}
                disabled={isDeleting}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                disabled={isDeleting || confirmText !== employee.name}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isDeleting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 size={18} />
                    Delete Forever
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteEmployeeButton;