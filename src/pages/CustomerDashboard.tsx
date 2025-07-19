import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar,
  MapPin,
  Star,
  Clock,
  User,
  Settings,
  Heart,
  MessageSquare,
  CreditCard,
  Bell,
  Eye,
  Plus,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";

const recentBookings = [
  {
    id: 1,
    craftsman: "Ahmed Hassan",
    service: "Furniture Assembly",
    date: "2024-01-15",
    status: "completed",
    price: 120,
    rating: 5
  },
  {
    id: 2,
    craftsman: "Youssef Alami",
    service: "Electrical Wiring",
    date: "2024-01-20",
    status: "in-progress",
    price: 180,
    rating: null
  },
  {
    id: 3,
    craftsman: "Fatima Benali",
    service: "Wall Painting",
    date: "2024-01-25",
    status: "pending",
    price: 200,
    rating: null
  }
];

const favoritesCraftsmen = [
  {
    id: 1,
    name: "Ahmed Hassan",
    craft: "Carpenter",
    rating: 4.9,
    completedJobs: 3,
    lastWorked: "2 weeks ago"
  },
  {
    id: 2,
    name: "Fatima Benali",
    craft: "Painter",
    rating: 4.8,
    completedJobs: 2,
    lastWorked: "1 month ago"
  }
];

export default function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-success text-success-foreground"><CheckCircle className="h-3 w-3 mr-1" />Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-warning text-warning-foreground"><Clock className="h-3 w-3 mr-1" />In Progress</Badge>;
      case "pending":
        return <Badge variant="outline"><AlertCircle className="h-3 w-3 mr-1" />Pending</Badge>;
      case "cancelled":
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">Customer since 2023</p>
                  </div>
                </div>
                
                <nav className="space-y-2">
                  <Button
                    variant={activeTab === "overview" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("overview")}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Overview
                  </Button>
                  <Button
                    variant={activeTab === "bookings" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("bookings")}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    My Bookings
                  </Button>
                  <Button
                    variant={activeTab === "favorites" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("favorites")}
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Favorites
                  </Button>
                  <Button
                    variant={activeTab === "messages" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("messages")}
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Messages
                  </Button>
                  <Button
                    variant={activeTab === "payments" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("payments")}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Payments
                  </Button>
                  <Button
                    variant={activeTab === "settings" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </nav>

                <div className="mt-6 pt-6 border-t">
                  <Button variant="gradient" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    New Booking
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah!</h1>
                  <p className="text-muted-foreground">Here is your account overview</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Total Bookings</p>
                          <p className="text-2xl font-bold">24</p>
                        </div>
                        <Calendar className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Active Jobs</p>
                          <p className="text-2xl font-bold">2</p>
                        </div>
                        <Clock className="h-8 w-8 text-warning" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Saved</p>
                          <p className="text-2xl font-bold">$1,240</p>
                        </div>
                        <CreditCard className="h-8 w-8 text-success" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Avg Rating</p>
                          <p className="text-2xl font-bold">4.8</p>
                        </div>
                        <Star className="h-8 w-8 text-warning" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Bookings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentBookings.slice(0, 3).map((booking) => (
                          <div key={booking.id} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{booking.service}</p>
                              <p className="text-sm text-muted-foreground">{booking.craftsman}</p>
                            </div>
                            <div className="text-right">
                              {getStatusBadge(booking.status)}
                              <p className="text-sm text-muted-foreground mt-1">${booking.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        View All Bookings
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          <Plus className="h-4 w-4 mr-2" />
                          Book a New Service
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Heart className="h-4 w-4 mr-2" />
                          Browse Favorites
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          View Messages
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Star className="h-4 w-4 mr-2" />
                          Leave Reviews
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "bookings" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold">My Bookings</h1>
                  <Button variant="gradient">
                    <Plus className="h-4 w-4 mr-2" />
                    New Booking
                  </Button>
                </div>

                <Tabs defaultValue="all" className="w-full">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                    <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="space-y-4">
                    {recentBookings.map((booking) => (
                      <Card key={booking.id}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-4 mb-3">
                                <h3 className="text-lg font-semibold">{booking.service}</h3>
                                {getStatusBadge(booking.status)}
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <User className="h-4 w-4 mr-1" />
                                  {booking.craftsman}
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {booking.date}
                                </div>
                                <div className="flex items-center">
                                  <CreditCard className="h-4 w-4 mr-1" />
                                  ${booking.price}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-1" />
                                Details
                              </Button>
                              {booking.status === "completed" && !booking.rating && (
                                <Button size="sm">
                                  <Star className="h-4 w-4 mr-1" />
                                  Rate
                                </Button>
                              )}
                              {booking.status === "pending" && (
                                <Button variant="destructive" size="sm">
                                  Cancel
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {activeTab === "favorites" && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold">Favorite Craftsmen</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {favoritesCraftsmen.map((craftsman) => (
                    <Card key={craftsman.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">{craftsman.name}</h3>
                            <p className="text-muted-foreground">{craftsman.craft}</p>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-warning text-warning mr-1" />
                            <span>{craftsman.rating}</span>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                          <p>{craftsman.completedJobs} jobs completed with you</p>
                          <p>Last worked: {craftsman.lastWorked}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" className="flex-1">
                            View Profile
                          </Button>
                          <Button className="flex-1">
                            Book Again
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "messages" && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold">Messages</h1>
                <Card>
                  <CardContent className="p-8 text-center">
                    <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No messages yet</h3>
                    <p className="text-muted-foreground">
                      Your conversations with craftsmen will appear here
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "payments" && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold">Payment History</h1>
                <Card>
                  <CardContent className="p-8 text-center">
                    <CreditCard className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Payment history</h3>
                    <p className="text-muted-foreground">
                      Your payment transactions will be displayed here
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold">Account Settings</h1>
                <Card>
                  <CardContent className="p-8 text-center">
                    <Settings className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Settings panel</h3>
                    <p className="text-muted-foreground">
                      Account settings and preferences will be available here
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}