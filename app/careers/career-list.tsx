
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function CareerList(props) {
  return (
    <>
      <h1>Careers</h1>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Available Careers</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {props.data.careerConnection.edges.map((career) => (
            <Link href={`/careers/${career.node._sys.filename}`} key={career.node.id}>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{career.node.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Click to view details</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
