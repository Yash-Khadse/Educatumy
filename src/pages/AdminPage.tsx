import React, { useEffect, useState } from "react";
import axios from "../utils/axiosAuth";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminPage: React.FC = () => {
  // Service form state
  const [service, setService] = useState({
    title: "",
    description: "",
    category: "",
    icon: "",
  });
  const [services, setServices] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [reply, setReply] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState<any>(null); // update type to any for full object
  const [editServiceId, setEditServiceId] = useState<string | null>(null);

  // Toggle state: "services" or "inquiries"
  const [activeSection, setActiveSection] = useState<"services" | "inquiries">(
    "services"
  );

  // Fetch all inquiries and services
  useEffect(() => {
    fetchInquiries();
    fetchServices();
  }, []);

  const fetchInquiries = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/admin/inquiries`
    );
    if (res.data.success) setInquiries(res.data.data);
  };

  const fetchServices = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/services`);
    if (res.data.success) setServices(res.data.data);
  };

  // Add or update service
  const handleAddOrUpdateService = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editServiceId) {
      // Update existing service
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/admin/services/${editServiceId}`,
        service
      );
      if (res.data.success) {
        setService({ title: "", description: "", category: "", icon: "" });
        setEditServiceId(null);
        fetchServices();
        toast.success("Service updated!");
      }
    } else {
      // Add new service
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/services`,
        service
      );
      if (res.data.success) {
        setService({ title: "", description: "", category: "", icon: "" });
        fetchServices();
        toast.success("Service added!");
      }
    }
  };

  // Edit service
  const handleEditService = (srv: any) => {
    setService({
      title: srv.title,
      description: srv.description,
      category: srv.category,
      icon: srv.icon,
    });
    setEditServiceId(srv._id);
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setService({ title: "", description: "", category: "", icon: "" });
    setEditServiceId(null);
  };

  // Delete service
  const handleDeleteService = async (id: string) => {
    if (!window.confirm("Delete this service?")) return;
    await axios.delete(`${import.meta.env.VITE_API_URL}/admin/services/${id}`);
    fetchServices();
  };

  // Delete inquiry
  const handleDeleteInquiry = async (id: string) => {
    if (!window.confirm("Delete this inquiry?")) return;
    await axios.delete(`${import.meta.env.VITE_API_URL}/admin/inquiries/${id}`);
    fetchInquiries();
  };

  // Reply to inquiry
  const handleReply = async (id: string) => {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/admin/inquiries/${id}/reply`,
      { replyMessage: reply }
    );
    setReply("");
    setSelectedInquiry(null);
    toast.success("Reply sent!");
  };

  const { logout } = useAuth();
  const navigate = useNavigate();

  // Add this function:
  const handleLogout = () => {
    logout();
    navigate("/admin-login");
  };

  return (
    <>
      <ToastContainer position="top-right" />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 py-10 px-2 ">
        <div className="max-w-5xl mx-auto mt-8">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl font-extrabold text-white text-center drop-shadow-lg">
              Admin Panel
            </h1>
            <button
              onClick={handleLogout}
              className="btn bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
            >
              Logout
            </button>
          </div>
          {/* Toggle Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-lg shadow bg-gray-800">
              <button
                className={`px-6 py-2 rounded-l-lg font-semibold transition-colors duration-200 ${
                  activeSection === "services"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => setActiveSection("services")}
              >
                Services
              </button>
              <button
                className={`px-6 py-2 rounded-r-lg font-semibold transition-colors duration-200 ${
                  activeSection === "inquiries"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => setActiveSection("inquiries")}
              >
                Inquiries
              </button>
            </div>
          </div>

          {/* Services Section */}
          {activeSection === "services" && (
            <section className="bg-gray-900/80 rounded-2xl shadow-lg p-8 mb-12 border border-purple-700">
              <h2 className="text-2xl font-bold text-purple-400 mb-6">
                {editServiceId ? "Edit Service" : "Add New Service"}
              </h2>
              <form
                onSubmit={handleAddOrUpdateService}
                className="space-y-4 max-w-lg mx-auto"
                autoComplete="off"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    className="form-input flex-1 bg-gray-800 text-white border-purple-500 focus:ring-purple-400 rounded-lg"
                    placeholder="Title"
                    value={service.title}
                    onChange={(e) =>
                      setService((s) => ({ ...s, title: e.target.value }))
                    }
                    required
                  />
                  <input
                    className="form-input flex-1 bg-gray-800 text-white border-purple-500 focus:ring-purple-400 rounded-lg"
                    placeholder="Category"
                    value={service.category}
                    onChange={(e) =>
                      setService((s) => ({ ...s, category: e.target.value }))
                    }
                    required
                  />
                </div>
                <input
                  className="form-input bg-gray-800 text-white border-purple-500 focus:ring-purple-400 rounded-lg w-full"
                  placeholder="Icon (URL or class)"
                  value={service.icon}
                  onChange={(e) =>
                    setService((s) => ({ ...s, icon: e.target.value }))
                  }
                />
                <textarea
                  className="form-input bg-gray-800 text-white border-purple-500 focus:ring-purple-400 rounded-lg w-full"
                  placeholder="Description"
                  value={service.description}
                  onChange={(e) =>
                    setService((s) => ({ ...s, description: e.target.value }))
                  }
                  required
                />
                <div className="flex space-x-2">
                  <button
                    type="submit"
                    className="btn bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
                  >
                    {editServiceId ? "Update Service" : "Add Service"}
                  </button>
                  {editServiceId && (
                    <button
                      type="button"
                      className="btn bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
              {/* Services Table */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">
                  All Services
                </h3>
                <div className="overflow-x-auto rounded-lg shadow">
                  <table className="min-w-full bg-gray-800 rounded-lg text-gray-200">
                    <thead className="sticky top-0 bg-gray-900 z-10">
                      <tr>
                        <th className="p-3 text-left border-b border-purple-700">
                          Title
                        </th>
                        <th className="p-3 text-left border-b border-purple-700">
                          Category
                        </th>
                        <th className="p-3 text-left border-b border-purple-700">
                          Icon
                        </th>
                        <th className="p-3 text-left border-b border-purple-700">
                          Description
                        </th>
                        <th className="p-3 text-left border-b border-purple-700">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {services.map((srv: any, idx: number) => (
                        <tr
                          key={srv._id}
                          className={`transition hover:bg-purple-900/40 border-b border-gray-700 ${
                            idx % 2 === 0 ? "bg-gray-900/60" : "bg-gray-900/40"
                          }`}
                        >
                          <td
                            className="p-3 max-w-xs truncate"
                            title={srv.title}
                          >
                            {srv.title}
                          </td>
                          <td
                            className="p-3 max-w-xs truncate"
                            title={srv.category}
                          >
                            {srv.category}
                          </td>
                          <td className="p-3">
                            {srv.icon ? (
                              srv.icon.startsWith("http") ? (
                                <img
                                  src={srv.icon}
                                  alt="icon"
                                  className="w-8 h-8 object-contain rounded"
                                />
                              ) : (
                                <span title={srv.icon}>{srv.icon}</span>
                              )
                            ) : (
                              "-"
                            )}
                          </td>
                          <td
                            className="p-3 max-w-xs truncate"
                            title={srv.description}
                          >
                            {srv.description}
                          </td>
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              <button
                                className="btn btn-xs bg-purple-600 hover:bg-purple-700 text-white rounded px-3 py-1 transition"
                                onClick={() => handleEditService(srv)}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-xs bg-red-600 hover:bg-red-700 text-white rounded px-3 py-1 transition"
                                onClick={() => handleDeleteService(srv._id)}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* Inquiries Section */}
          {activeSection === "inquiries" && (
            <section className="bg-gray-900/80 rounded-2xl shadow-lg p-8 border border-purple-700">
              <h2 className="text-2xl font-bold text-purple-400 mb-6">
                Received Inquiries
              </h2>
              <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full bg-gray-800 rounded-lg text-gray-200">
                  <thead className="sticky top-0 bg-gray-900 z-10">
                    <tr>
                      <th className="p-3 text-left border-b border-purple-700">
                        Name
                      </th>
                      <th className="p-3 text-left border-b border-purple-700">
                        Email
                      </th>
                      <th className="p-3 text-left border-b border-purple-700">
                        Phone
                      </th>
                      <th className="p-3 text-left border-b border-purple-700">
                        Service
                      </th>
                      <th className="p-3 text-left border-b border-purple-700">
                        Message
                      </th>
                      <th className="p-3 text-left border-b border-purple-700">
                        Date
                      </th>
                      <th className="p-3 text-left border-b border-purple-700">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {inquiries.map((inq: any, idx: number) => (
                      <tr
                        key={inq._id}
                        className={`transition hover:bg-purple-900/40 border-b border-gray-700 ${
                          idx % 2 === 0 ? "bg-gray-900/60" : "bg-gray-900/40"
                        } cursor-pointer`}
                        onClick={() => setSelectedInquiry(inq)} // set full inquiry object
                      >
                        <td className="p-3 max-w-xs truncate" title={inq.name}>{inq.name}</td>
                        <td className="p-3 max-w-xs truncate" title={inq.email}>{inq.email}</td>
                        <td className="p-3 max-w-xs truncate" title={inq.phone}>{inq.phone || "-"}</td>
                        <td className="p-3 max-w-xs truncate" title={inq.serviceInterest}>{inq.serviceInterest || "-"}</td>
                        <td className="p-3 max-w-xs truncate" title={inq.message}>{inq.message}</td>
                        <td className="p-3">
                          {inq.createdAt ? new Date(inq.createdAt).toLocaleString() : "-"}
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
                            <button
                              className="btn btn-xs bg-purple-600 hover:bg-purple-700 text-white rounded px-3 py-1 transition"
                              onClick={() => setSelectedInquiry(inq)}
                            >
                              Reply
                            </button>
                            <button
                              className="btn btn-xs bg-red-600 hover:bg-red-700 text-white rounded px-3 py-1 transition"
                              onClick={() => handleDeleteInquiry(inq._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Inquiry Details Modal */}
              {selectedInquiry && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                  <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-lg border-2 border-purple-600 relative">
                    <button
                      className="absolute top-3 right-3 text-gray-500 hover:text-purple-700 text-2xl"
                      onClick={() => setSelectedInquiry(null)}
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <h3 className="text-xl font-bold mb-4 text-purple-700">
                      Inquiry Details
                    </h3>
                    <div className="space-y-2 mb-6">
                      <div>
                        <span className="font-semibold">Name:</span> {selectedInquiry.name}
                      </div>
                      <div>
                        <span className="font-semibold">Email:</span> {selectedInquiry.email}
                      </div>
                      <div>
                        <span className="font-semibold">Phone:</span> {selectedInquiry.phone || "-"}
                      </div>
                      <div>
                        <span className="font-semibold">Service:</span> {selectedInquiry.serviceInterest || "-"}
                      </div>
                      <div>
                        <span className="font-semibold">Message:</span>
                        <div className="bg-gray-100 rounded p-2 mt-1 text-gray-800 break-words">
                          {selectedInquiry.message}
                        </div>
                      </div>
                      <div>
                        <span className="font-semibold">Date:</span>{" "}
                        {selectedInquiry.createdAt
                          ? new Date(selectedInquiry.createdAt).toLocaleString()
                          : "-"}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-purple-700">Reply</h4>
                    <textarea
                      className="form-input w-full mb-4 border-purple-400 focus:ring-purple-400 rounded-lg"
                      rows={5}
                      value={reply}
                      onChange={(e) => setReply(e.target.value)}
                      placeholder="Type your reply..."
                    />
                    <div className="flex justify-end space-x-2">
                      <button
                        className="btn bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
                        onClick={() => handleReply(selectedInquiry._id)}
                      >
                        Send Reply
                      </button>
                      <button
                        className="btn bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
                        onClick={() => setSelectedInquiry(null)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
