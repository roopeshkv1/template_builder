// App.tsx
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthActions } from "./hooks/useAuthActions";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/admin/home/Dashboard";
import AdminPanel from "./pages/admin/AdminPanel";
import { Unauthorized } from "./pages/Unauthorized";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import MainLayout from "./layout/MainLayout";

import { LoadingSpinner } from "./components/ui/LoadingSpinner";

import AdminLayout from "./layout/AdminLayout";

import Homepage from "./pages/public/HomePage";





// Public pages

export const App = () => {
  const { initializeAuth, isLoading } = useAuthActions();

  useEffect(() => {
    initializeAuth();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Routes>
      {/* Public Routes - No authentication required */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Homepage />
          </MainLayout>
        }
      />
    

      {/* Admin Auth Route */}
      <Route path="/admin/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Protected Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute roles={["admin"]}>
            <AdminLayout>
              <Navigate to="/admin/dashboard" replace />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute roles={["admin"]}>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
  

      {/* Catch all route */}
      <Route
        path="*"
        element={
          <MainLayout>
            <Homepage />
          </MainLayout>
        }
      />
    </Routes>
  );
};
