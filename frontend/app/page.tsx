import EditorComponent from '@/components/Editor';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function Home() {
  return (
    <ProtectedRoute>
      <EditorComponent />
    </ProtectedRoute>
  );
}
