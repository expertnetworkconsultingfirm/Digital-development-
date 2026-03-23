const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware for parsing and static files
app.use(express.json());
app.use(express.static('public'));

// Mock API for SaaS functionality (Campaign Status, Lead Tracking)
app.get('/api/v1/status', (req, res) => {
    res.json({
        firm: "Expert Network Consulting",
        campaign: "Metro2 Forensic Audit",
        automation_status: "Operational",
        daily_limit: 150,
        active_leads: "Segment A/B Primary"
    });
});

// Main Route - Serves your Expert Network UI
app.get('*', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Expert Network SaaS | Control Center</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-slate-900 text-white font-sans">
            <div class="flex h-screen">
                <!-- Sidebar -->
                <div class="w-64 bg-slate-800 p-6 shadow-xl">
                    <h1 class="text-xl font-bold text-amber-500 mb-8">EN OPS v1.0</h1>
                    <nav class="space-y-4 text-sm uppercase tracking-widest text-slate-400">
                        <div class="text-white font-bold cursor-pointer">Dashboard</div>
                        <div class="hover:text-white cursor-pointer">Lead Intelligence</div>
                        <div class="hover:text-white cursor-pointer">Campaign Automation</div>
                        <div class="hover:text-white cursor-pointer">Metro2 Portal</div>
                    </nav>
                </div>
                <!-- Main Content -->
                <div class="flex-1 p-10">
                    <header class="flex justify-between items-center mb-10">
                        <h2 class="text-3xl font-bold">Expert Network Operations</h2>
                        <div class="bg-green-500/10 border border-green-500 text-green-500 px-4 py-1 rounded-full text-xs">System Live</div>
                    </header>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="bg-slate-800 p-8 rounded-2xl border border-white/5">
                            <h3 class="text-amber-500 text-sm font-bold uppercase mb-4">Current Campaign</h3>
                            <p class="text-2xl font-semibold mb-2 leading-tight">Metro2 Forensic Data Audit Outreach</p>
                            <p class="text-slate-400 text-sm">Targeting Segment A: Priority Funding Leads</p>
                        </div>
                        <div class="bg-slate-800 p-8 rounded-2xl border border-white/5">
                            <h3 class="text-amber-500 text-sm font-bold uppercase mb-4">Consultant ROI</h3>
                            <div class="text-4xl font-bold">$400 - $800 <span class="text-sm font-normal text-slate-400">Flat Rate</span></div>
                            <p class="text-slate-400 text-sm mt-2">Zero Energetic Cost Strategy Enabled</p>
                        </div>
                    </div>
                    <div class="mt-10 p-8 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
                        <p class="text-amber-500">Domain Active: Software is successfully handling expert network requests.</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Expert Network SaaS running on port ${PORT}`);
});

