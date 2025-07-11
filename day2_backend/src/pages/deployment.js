/* eslint-disable react/no-unescaped-entities */
import React from "react";

const DeploymentIndex = () => {
  return (
    <div className="max-w-3xl mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">
        How to Deploy Your Next.js Project
      </h1>

      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">
            Step 1: Check Your Project
          </h2>
          <p>First, make sure your project builds without errors:</p>
          <div className="bg-gray-800 text-green-400 p-3 rounded mt-2 font-mono text-sm">
            npm run build
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">
            Step 2: Configure Your Project
          </h2>
          <p>
            Create or update your{" "}
            <code className="bg-gray-200 px-2 py-1 rounded">
              next.config.js
            </code>{" "}
            file:
          </p>
          <div className="bg-gray-800 text-green-400 p-3 rounded mt-2 font-mono text-sm">
            {`/** @type {import('next').NextConfig} */
                const nextConfig = { output: 'export',      // For static export 
                    images: {
                        unoptimized: true
                    }
                }
            module.exports = nextConfig`}
          </div>
          <p className="mt-2 text-sm text-gray-600">
            <strong>Note:</strong> Remove the export line if you need
            server-side features.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">
            Step 3: Choose a Hosting Platform
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-4 rounded border">
              <h3 className="font-semibold text-purple-600 mb-2">
                Vercel (Recommended)
              </h3>
              <ol className="text-sm space-y-1">
                <li>
                  1. Go to{" "}
                  <a
                    href="https://vercel.com"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    vercel.com
                  </a>
                </li>
                <li>2. Connect your GitHub repository</li>
                <li>3. Click "Deploy"</li>
                <li>4. Done! Your site is live</li>
              </ol>
            </div>

            <div className="bg-white p-4 rounded border">
              <h3 className="font-semibold text-blue-600 mb-2">Netlify</h3>
              <ol className="text-sm space-y-1">
                <li>
                  1. Go to{" "}
                  <a
                    href="https://netlify.com"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    netlify.com
                  </a>
                </li>
                <li>2. Connect your Git repository</li>
                <li>
                  3. Build command: <code>npm run build</code>
                </li>
                <li>
                  4. Publish directory: <code>out</code>
                </li>
                <li>5. Deploy</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h2 className="text-lg font-semibold mb-2">Important Tips</h2>
          <ul className="space-y-1 text-sm">
            <li>
              • Set environment variables in your hosting platform's dashboard
            </li>
            <li>
              • Use{" "}
              <code className="bg-gray-200 px-1 rounded">NEXT_PUBLIC_</code>{" "}
              prefix for client-side variables
            </li>
            <li>• Test your build locally before deploying</li>
            <li>
              • Your live URL will be provided after successful deployment
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeploymentIndex;
