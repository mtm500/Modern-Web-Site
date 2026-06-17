import React from 'react';
import { ArrowRight, Leaf, Scissors, Droplets, Scale, Star, Heart, Coffee, Dumbbell, Wrench } from 'lucide-react';

export default function ProjectsView({ navigate }: { navigate: (page: string) => void }) {
  const projects = [
    { 
      id: "project-apex",
      name: "Apex Landscaping", 
      category: "Service Business", 
      colorText: "text-emerald-600",
      Miniature: () => (
        <div className="h-full w-full bg-slate-50 flex flex-col">
          {/* Header */}
          <div className="h-4 bg-white border-b border-slate-200 flex items-center px-2 space-x-2">
            <div className="w-12 h-1.5 bg-emerald-600 rounded-full"></div>
            <div className="w-4 h-1 bg-slate-200 rounded-full ml-auto"></div>
            <div className="w-4 h-1 bg-slate-200 rounded-full"></div>
            <div className="w-4 h-1 bg-slate-200 rounded-full"></div>
          </div>
          {/* Hero */}
          <div className="h-20 bg-emerald-900 flex flex-col items-center justify-center px-4 text-center">
            <div className="w-24 h-2 bg-emerald-400 rounded-full mb-2"></div>
            <div className="w-16 h-1.5 bg-emerald-700 rounded-full mb-3"></div>
            <div className="w-12 h-4 bg-emerald-500 rounded-sm"></div>
          </div>
          {/* Content Grid */}
          <div className="flex-grow p-2 grid grid-cols-3 gap-2">
            <div className="bg-white rounded border border-slate-200 flex flex-col items-center p-1">
              <Leaf className="h-3 w-3 text-emerald-600 mb-1" />
              <div className="w-full h-1 bg-slate-200 rounded-full mb-1"></div>
              <div className="w-2/3 h-1 bg-slate-200 rounded-full"></div>
            </div>
            <div className="bg-white rounded border border-slate-200 flex flex-col items-center p-1">
              <Scissors className="h-3 w-3 text-emerald-600 mb-1" />
              <div className="w-full h-1 bg-slate-200 rounded-full mb-1"></div>
              <div className="w-2/3 h-1 bg-slate-200 rounded-full"></div>
            </div>
            <div className="bg-white rounded border border-slate-200 flex flex-col items-center p-1">
              <Droplets className="h-3 w-3 text-emerald-600 mb-1" />
              <div className="w-full h-1 bg-slate-200 rounded-full mb-1"></div>
              <div className="w-2/3 h-1 bg-slate-200 rounded-full"></div>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: "project-lumina",
      name: "Lumina Legal", 
      category: "Law Firm", 
      colorText: "text-slate-600",
      Miniature: () => (
        <div className="h-full w-full bg-slate-100 flex flex-col">
          {/* Header */}
          <div className="h-4 bg-slate-900 flex items-center px-2 justify-between">
            <div className="w-10 h-1.5 bg-amber-500 rounded-full"></div>
            <div className="w-6 h-2 bg-amber-600 rounded-sm"></div>
          </div>
          {/* Split Hero */}
          <div className="h-24 bg-slate-800 flex">
            <div className="w-1/2 p-3 flex flex-col justify-center">
              <div className="w-20 h-2 bg-slate-200 rounded-full mb-2"></div>
              <div className="w-16 h-2 bg-slate-200 rounded-full mb-3"></div>
              <div className="w-full h-1 bg-slate-500 rounded-full mb-1"></div>
              <div className="w-3/4 h-1 bg-slate-500 rounded-full mb-3"></div>
              <div className="w-10 h-3 bg-amber-500 rounded-sm"></div>
            </div>
            <div className="w-1/2 bg-slate-700 flex items-center justify-center">
              <Scale className="h-10 w-10 text-slate-500 opacity-50" />
            </div>
          </div>
          {/* Testimonial band */}
          <div className="h-6 bg-slate-200 flex items-center justify-center space-x-1">
            <Star className="h-2 w-2 text-amber-500 fill-current" />
            <Star className="h-2 w-2 text-amber-500 fill-current" />
            <Star className="h-2 w-2 text-amber-500 fill-current" />
            <Star className="h-2 w-2 text-amber-500 fill-current" />
            <Star className="h-2 w-2 text-amber-500 fill-current" />
          </div>
        </div>
      )
    },
    { 
      id: "project-bright",
      name: "Bright Smiles Dental", 
      category: "Healthcare", 
      colorText: "text-cyan-600",
      Miniature: () => (
        <div className="h-full w-full bg-white flex flex-col">
          {/* Header */}
          <div className="h-5 border-b border-slate-100 flex items-center justify-center px-2">
            <div className="w-20 h-1.5 bg-cyan-600 rounded-full"></div>
          </div>
          {/* Hero centered */}
          <div className="h-20 bg-cyan-50 flex flex-col items-center justify-center rounded-b-3xl mx-2 mb-2">
            <Heart className="h-6 w-6 text-cyan-400 mb-2 fill-current" />
            <div className="w-24 h-1.5 bg-cyan-900 rounded-full mb-1"></div>
            <div className="w-16 h-1 bg-cyan-700 rounded-full"></div>
          </div>
          {/* Grid */}
          <div className="flex-grow grid grid-cols-2 gap-2 px-2 pb-2">
            <div className="bg-blue-50 rounded-xl border border-blue-100 p-1.5 flex flex-col justify-between">
              <div className="w-4 h-4 rounded-full bg-cyan-200"></div>
              <div className="w-full h-1 bg-slate-300 rounded-full"></div>
            </div>
            <div className="bg-blue-50 rounded-xl border border-blue-100 p-1.5 flex flex-col justify-between">
              <div className="w-4 h-4 rounded-full bg-cyan-200"></div>
              <div className="w-full h-1 bg-slate-300 rounded-full"></div>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: "project-cornerstone",
      name: "Cornerstone Cafe", 
      category: "Restaurant", 
      colorText: "text-orange-600",
      Miniature: () => (
        <div className="h-full w-full bg-stone-50 flex flex-col">
          {/* Header */}
          <div className="h-4 bg-orange-900 flex items-center px-2 justify-between">
            <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <div className="flex space-x-1">
              <div className="w-3 h-1 bg-stone-400 rounded-full"></div>
              <div className="w-3 h-1 bg-stone-400 rounded-full"></div>
            </div>
          </div>
          {/* Hero image style */}
          <div className="h-16 bg-stone-800 relative flex items-center justify-center overflow-hidden">
            <Coffee className="h-10 w-10 text-stone-700 absolute right-[-5px] bottom-[-5px]" />
            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-20 h-2 bg-white rounded-full mb-1"></div>
              <div className="w-12 h-3 bg-orange-600 rounded-sm"></div>
            </div>
          </div>
          {/* Masonry-ish grid */}
          <div className="flex-grow p-2 flex space-x-2">
            <div className="w-1/2 flex flex-col space-y-2">
              <div className="h-12 bg-stone-200 rounded border border-stone-300"></div>
              <div className="h-8 bg-stone-200 rounded border border-stone-300"></div>
            </div>
            <div className="w-1/2 flex flex-col space-y-2">
              <div className="h-8 bg-stone-200 rounded border border-stone-300"></div>
              <div className="h-12 bg-stone-200 rounded border border-stone-300"></div>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: "project-elevate",
      name: "Elevate Fitness", 
      category: "Gym", 
      colorText: "text-fuchsia-600",
      Miniature: () => (
        <div className="h-full w-full bg-black flex flex-col border border-slate-800">
          {/* Header */}
          <div className="h-4 flex items-center px-2 border-b border-slate-800">
            <div className="w-16 h-1.5 bg-white rounded-full italic"></div>
            <div className="w-8 h-2 bg-fuchsia-600 rounded-sm ml-auto"></div>
          </div>
          {/* Dark Hero */}
          <div className="h-24 relative flex items-center justify-center overflow-hidden border-b border-slate-800">
            {/* Geometric abstract bg */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-fuchsia-900 rounded-bl-full opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center">
              <Dumbbell className="h-6 w-6 text-fuchsia-500 mb-2" />
              <div className="w-24 h-2 bg-white rounded-full mb-2"></div>
              <div className="w-16 h-3 bg-fuchsia-600 rounded-sm"></div>
            </div>
          </div>
          {/* Cards */}
          <div className="flex-grow p-2 grid grid-cols-2 gap-2">
            <div className="bg-slate-900 rounded border border-slate-800 p-1 flex items-end">
              <div className="w-full h-1 bg-slate-600 rounded-full"></div>
            </div>
            <div className="bg-slate-900 rounded border border-slate-800 p-1 flex items-end">
              <div className="w-full h-1 bg-slate-600 rounded-full"></div>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: "project-mainstreet",
      name: "Main Street Plumbers", 
      category: "Contractor", 
      colorText: "text-blue-600",
      Miniature: () => (
        <div className="h-full w-full bg-white flex flex-col">
          {/* Top Bar (Emergency) */}
          <div className="h-3 bg-red-600 flex items-center px-2 justify-center">
            <div className="w-16 h-1 bg-white rounded-full"></div>
          </div>
          {/* Header */}
          <div className="h-5 flex items-center px-2 justify-between border-b border-slate-100">
            <div className="w-12 h-1.5 bg-blue-800 rounded-full"></div>
            <div className="w-8 h-2 bg-blue-100 border border-blue-200 rounded-sm"></div>
          </div>
          {/* Hero */}
          <div className="h-16 bg-blue-50 flex items-center px-2">
            <div className="flex-grow">
              <div className="w-20 h-2 bg-blue-900 rounded-full mb-1"></div>
              <div className="w-16 h-1 bg-slate-500 rounded-full mb-2"></div>
              <div className="w-12 h-3 bg-red-600 rounded-sm"></div>
            </div>
            <Wrench className="h-8 w-8 text-blue-200 ml-2" />
          </div>
          {/* List items */}
          <div className="flex-grow p-2 space-y-1.5">
            <div className="flex items-center bg-slate-50 p-1 rounded border border-slate-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
              <div className="w-16 h-1 bg-slate-400 rounded-full"></div>
            </div>
            <div className="flex items-center bg-slate-50 p-1 rounded border border-slate-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
              <div className="w-10 h-1 bg-slate-400 rounded-full"></div>
            </div>
            <div className="flex items-center bg-slate-50 p-1 rounded border border-slate-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
              <div className="w-12 h-1 bg-slate-400 rounded-full"></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="fade-in py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Our Recent Projects</h1>
          <p className="text-xl text-slate-600">
            Beautiful, fast, and functional websites designed specifically to convert visitors into paying customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => navigate(project.id)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 group cursor-pointer flex flex-col"
            >
              {/* Miniature Wireframe Simulation */}
              <div className="h-48 w-full border-b border-slate-100 relative overflow-hidden bg-slate-200 p-2">
                 <div className="w-full h-full rounded-t-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow bg-white">
                   <project.Miniature />
                 </div>
                 {/* Hover overlay effect */}
                 <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/5 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white text-indigo-600 px-4 py-2 rounded-full font-bold text-sm shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Demo
                    </div>
                 </div>
              </div>
              
              <div className="p-6 flex-grow">
                <div className={`text-xs font-bold tracking-wider ${project.colorText} uppercase mb-2`}>{project.category}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>
                <p className="text-slate-500 text-sm mb-4">
                  Custom designed multi-page site featuring effortless visual editing, fast load times, and a zero-maintenance architecture.
                </p>
                <div className={`text-sm font-medium ${project.colorText} flex items-center group-hover:underline mt-auto`}>
                  View Demo <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
