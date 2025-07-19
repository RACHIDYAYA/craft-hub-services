import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar,
  DollarSign,
  Star,
  Clock,
  User,
  Settings,
  Briefcase,
  MessageSquare,
  TrendingUp,
  Bell,
  Eye,
  Plus,
  CheckCircle,
  XCircle,
  AlertCircle,
  Camera
} from "lucide-react";

const pendingBookings = [
  {
    id: 1,
    customer: "Sarah Johnson",
    service: "Kitchen Cabinet Installation",
    date: "2024-01-25",
    time: "10:00 AM",
    price: 250,
    description: "Install new kitchen cabinets in a 12x10 kitchen.",
    urgency: "normal"
  },
  {
    id: 2,
    customer: "Michael Brown",
    service: "Electrical Outlet Installation",
    date: "2024-01-26",
    time: "2:00 PM",
    price: 120,
    description: "Install 3 new electrical outlets in living room.",
    urgency: "urgent"
  }
];

const recentJobs = [
  {
    id: 1,
    customer: "Emma Wilson",
    service: "Furniture Assembly",
    completedDate: "2024-01-20",
    price: 150,
    rating: 5,
    status: "completed"
  },
  {
    id: 2,
    customer: "David Lee",
    service: "Shelf Installation",
    completedDate: "2024-01-18",
    price: 80,
    rating: 4,
    status: "completed"
  }
];

const monthlyStats = {
  earnings: 2480,
  jobs: 18,
  rating: 4.9,
  responseTime: "45 min"
};

export default function CraftsmanDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case "urgent":
        return <Badge variant="destructive">Urgent</Badge>;
      case "normal":
        return <Badge variant="outline">Normal</Badge>;
      default:
        return <Badge variant="outline">{urgency}</Badge>;
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
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Ahmed Hassan</h3>
                    <p className="text-sm text-muted-foreground">Professional Carpenter</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-3 w-3 fill-warning text-warning mr-1" />
                      <span className="text-sm">4.9 (127 reviews)</span>
                    </div>
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
                    Bookings
                  </Button>
                  <Button
                    variant={activeTab === "portfolio" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("portfolio")}
                  >
                    <Camera className="h-4 w-4 mr-2" />
                    Portfolio
                  </Button>
                  <Button
                    variant={activeTab === "earnings" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("earnings")}
                  >
                    <DollarSign className="h-4 w-4 mr-2" />
                    Earnings
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
                    variant={activeTab === "profile" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("profile")}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </nav>

                <div className="mt-6 pt-6 border-t">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <Badge className="bg-success text-success-foreground">Active</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subscription:</span>
                      <span className="font-medium">Pro Plan</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Good morning, Ahmed!</h1>
                  <p className="text-muted-foreground">Here is your business overview for today</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">This Month</p>
                          <p className="text-2xl font-bold">${monthlyStats.earnings}</p>
                        </div>
                        <TrendingUp className="h-8 w-8 text-success" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Jobs Completed</p>
                          <p className="text-2xl font-bold">{monthlyStats.jobs}</p>
                        </div>
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Rating</p>
                          <p className="text-2xl font-bold">{monthlyStats.rating}</p>
                        </div>
                        <Star className="h-8 w-8 text-warning" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Response Time</p>
                          <p className="text-2xl font-bold">{monthlyStats.responseTime}</p>
                        </div>
                        <Clock className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Pending Requests */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Pending Booking Requests</span>
                      <Badge variant="secondary">{pendingBookings.length} new</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pendingBookings.map((booking) => (
                        <div key={booking.id} className="border rounded-lg p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-semibold">{booking.service}</h4>
                                {getUrgencyBadge(booking.urgency)}
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                Customer: {booking.customer}
                              </p>
                              <p className="text-sm mb-3">{booking.description}</p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {booking.date} at {booking.time}
                                </div>
                                <div className="flex items-center">
                                  <DollarSign className="h-4 w-4 mr-1" />
                                  ${booking.price}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 ml-4">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-1" />
                                Details
                              </Button>
                              <Button variant="destructive" size="sm">
                                Decline
                              </Button>
                              <Button size="sm">
                                Accept
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Jobs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentJobs.map((job) => (
                          <div key={job.id} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{job.service}</p>
                              <p className="text-sm text-muted-foreground">{job.customer}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center">
                                {[...Array(job.rating)].map((_, i) => (
                                  <Star key={i} className="h-3 w-3 fill-warning text-warning" />
                                ))}
                              </div>
                              <p className="text-sm text-muted-foreground">${job.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        View All Jobs
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
                          Update Availability
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Camera className="h-4 w-4 mr-2" />
                          Add Portfolio Item
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          View Messages
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          View Analytics
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "bookings" && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold">Manage Bookings</h1>

                <Tabs defaultValue="pending" className="w-full">
                  <TabsList>
                    <TabsTrigger value="pending">Pending ({pendingBookings.length})</TabsTrigger>
                    <TabsTrigger value="accepted">Accepted</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                    <TabsTrigger value="all">All</TabsTrigger>
                  </TabsList>

                  <TabsContent value="pending" className="space-y-4">
                    {pendingBookings.map((booking) => (
                      <Card key={booking.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                <h3 className="text-lg font-semibold">{booking.service}</h3>
                                {getUrgencyBadge(booking.urgency)}
                              </div>
                              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                                <div className="flex items-center">
                                  <User className="h-4 w-4 mr-2" />
                                  {booking.customer}
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-2" />
                                  {booking.date} at {booking.time}
                                </div>
                                <div className="flex items-center">
                                  <DollarSign className="h-4 w-4 mr-2" />
                                  ${booking.price}
                                </div>
                              </div>
                              <p className="text-sm">{booking.description}</p>
                            </div>
                            <div className="flex items-center gap-2 ml-6">
                              <Button variant="outline" size="sm">
                                Contact Customer
                              </Button>
                              <Button variant="destructive" size="sm">
                                Decline
                              </Button>
                              <Button size="sm">
                                Accept Job
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {activeTab === "portfolio" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold">My Portfolio</h1>
                  <Button variant="gradient">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Project
                  </Button>
                </div>
                <Card>
                  <CardContent className="p-8 text-center">
                    <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Build your portfolio</h3>
                    <p className="text-muted-foreground mb-4">
                      Showcase your best work to attract more customers
                    </p>
                    <Button variant="gradient">
                      <Plus className="h-4 w-4 mr-2" />
                      Add First Project
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "earnings" && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold">Earnings & Analytics</h1>
                <Card>
                  <CardContent className="p-8 text-center">
                    <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Earnings dashboard</h3>
                    <p className="text-muted-foreground">
                      Detailed earnings and analytics will be available here
                    </p>
                  </CardContent>
                </Card>
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
                      Customer conversations will appear here
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold">Profile Settings</h1>
                <Card>
                  <CardContent className="p-8 text-center">
                    <Settings className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Profile management</h3>
                    <p className="text-muted-foreground">
                      Profile settings and account management options
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