// Stage records can now include optional rich content fields:
// image: { src, alt, caption }
// links: [{ label, href, description, external }]
// blocks: [{ type: 'paragraph' | 'html' | 'quote' | 'list' | 'image' | 'links' | 'cta', ... }]
window.AA_LENS_DATA = {
  "individual": {
    "title": "Individual",
    "stages": {
      "aware": {
        "label": "Aware",
        "headline": "You know AI matters, but it is still mostly outside your routine.",
        "summary": "The goal is to turn interest into personal relevance.",
        "looksLike": "You read about AI, try a few prompts, and can see that your work is changing but have not settled into a repeatable habit yet.",
        "tools": {
          "type": "links",
          "items": [
            {
              "label": "ChatGPT",
              "href": "https://chatgpt.com",
              "description": "Start with general chat.",
              "external": true
            },
            {
              "label": "Claude",
              "href": "https://claude.ai",
              "description": "Try for writing tasks.",
              "external": true
            },
            {
              "label": "AAOS Framework",
              "href": "/lens/individual/aaos/",
              "description": "Learn the stages."
            }
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Pick one daily task to improve",
            "Make it repeatable before adding more",
            "Set a recurring 'AI curiosity' timer"
          ]
        },
        "progression": "Identify one high-impact workflow and successfully use AI to draft an initial version.",
        "watchOut": "Do not mistake curiosity for capability or activity for progress.",
        "posture": "Use AI intentionally, validate your outputs, and keep human judgment in the loop.",
        "example": "Alice hears colleagues talking about AI. She tries ChatGPT once to draft a tricky email to a client, but doesn't yet have a system for when to use it.",
        "resources": {
          "deepDive": [
            {
              "label": "Becoming AI-Augmented: Chapter 1",
              "href": "https://paidar.ai/books/becoming-ai-augmented/",
              "description": "Read the specific guidance for the Aware stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "exploring": {
        "label": "Exploring",
        "headline": "You are testing what AI can do for your work.",
        "summary": "The goal is to narrow from experimentation to useful patterns.",
        "looksLike": "You have a few prompts that work, you are comparing tools, and you are starting to notice where AI saves time or adds quality.",
        "tools": {
          "type": "links",
          "items": [
            {
              "label": "Perplexity",
              "href": "https://perplexity.ai",
              "description": "For research and search.",
              "external": true
            },
            {
              "label": "Microsoft Copilot",
              "href": "https://copilot.microsoft.com",
              "description": "Integrated search/web.",
              "external": true
            },
            {
              "label": "Prompt Library",
              "href": "/resources/",
              "description": "Find shared patterns."
            }
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Standardize one workflow",
            "Compare outputs from different models",
            "Document what actually saves time"
          ]
        },
        "progression": "Document three repeatable prompts that consistently produce reliable results for a specific task.",
        "watchOut": "Do not accumulate prompts without deciding what is worth keeping.",
        "posture": "Increase validation and reduce friction by documenting the workflow that actually works.",
        "example": "Bob starts using AI for all his research tasks. He notices it's great for summaries but sometimes misses technical nuances, so he begins verifying its output against primary sources.",
        "resources": {
          "deepDive": [
            {
              "label": "Becoming AI-Augmented: Chapter 2",
              "href": "https://paidar.ai/books/becoming-ai-augmented/",
              "description": "Read the specific guidance for the Exploring stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "experimenting": {
        "label": "Experimenting",
        "headline": "You are starting to build real repeatable practice.",
        "summary": "The goal is to make the work more dependable.",
        "looksLike": "You reuse prompts, compare outputs, and are beginning to notice which tasks AI should and should not touch.",
        "tools": {
          "type": "list",
          "items": [
            "Advanced Prompt Templates",
            "Task-specific GPTs or Assistants",
            "Review & Validation checklists"
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Strengthen review habits",
            "Make workflows repeatable",
            "Test edge cases in your prompts"
          ]
        },
        "progression": "Integrate AI into a daily work ritual with a mandatory human-in-the-loop validation step.",
        "watchOut": "Avoid over-trusting outputs or spreading too fast into too many use cases.",
        "posture": "Be more disciplined about checking, source tracing, and deciding where human review is required.",
        "example": "Charlie creates a folder of 'Gold Standard' prompts for his recurring monthly reports. He uses these prompts every month and refines them when he encounters errors.",
        "resources": {
          "deepDive": [
            {
              "label": "Becoming AI-Augmented: Chapter 3",
              "href": "https://paidar.ai/books/becoming-ai-augmented/",
              "description": "Read the specific guidance for the Experimenting stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "integrating": {
        "label": "Integrating",
        "headline": "AI is becoming part of how you think and work.",
        "summary": "The goal is to make AI part of a dependable workflow.",
        "looksLike": "You can move from idea to draft to review faster, and AI is now part of your regular work rhythm.",
        "tools": {
          "type": "links",
          "items": [
            {
              "label": "Custom Instructions",
              "href": "https://help.openai.com/en/articles/8096356-custom-instructions-for-chatgpt",
              "description": "Set your persona.",
              "external": true
            },
            {
              "label": "Workflow Library",
              "href": "/resources/",
              "description": "Versioned templates."
            }
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Build your personal OS",
            "Refine versioned templates",
            "Optimize for quality, not just speed"
          ]
        },
        "progression": "Create a shared resource (guide, library, or checklist) that helps at least one peer adopt a similar workflow.",
        "watchOut": "Do not let convenience weaken judgment or quality control.",
        "posture": "Maintain clear standards for validation, attribution, and final accountability.",
        "example": "Dana has AI integrated into her IDE and her email client. She uses it as a real-time partner for coding and communication, with a mandatory 2-minute review block for every AI output.",
        "resources": {
          "deepDive": [
            {
              "label": "Becoming AI-Augmented: Chapter 4",
              "href": "https://paidar.ai/books/becoming-ai-augmented/",
              "description": "Read the specific guidance for the Integrating stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "leading": {
        "label": "Leading",
        "headline": "You are helping other people work this way.",
        "summary": "The goal is to influence consistency for others, not just yourself.",
        "looksLike": "Peers ask how you use AI, you document good practice, and your workflow becomes a model others can follow.",
        "tools": {
          "type": "list",
          "items": [
            "Shared Playbooks",
            "Internal Example Libraries",
            "Team Review Checklists"
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Teach patterns, not just tools",
            "Document peer success stories",
            "Establish shared quality standards"
          ]
        },
        "progression": "Redesign a core job function around AI-human partnership, where the outcome is significantly better than either could achieve alone.",
        "watchOut": "Do not assume your workflow will transfer without explanation or support.",
        "posture": "Model responsible use and make the workflow explainable to others.",
        "example": "Edward develops a 'Prompt Engineering for Analysts' workshop for his department, sharing his versioned templates and validation checklists with 10 team members.",
        "resources": {
          "deepDive": [
            {
              "label": "Becoming AI-Augmented: Chapter 5",
              "href": "https://paidar.ai/books/becoming-ai-augmented/",
              "description": "Read the specific guidance for the Leading stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "augmenting": {
        "label": "Augmenting",
        "headline": "AI is changing your work identity and how you create impact.",
        "summary": "The goal is to sustain augmentation without losing human-centered judgment.",
        "looksLike": "Your work, decisions, and outputs are materially different because AI is woven into how you operate.",
        "tools": {
          "type": "list",
          "items": [
            "Curated Personal AI Stack",
            "Custom Workflow Templates",
            "Automated Validation Habits"
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Keep standards durable at scale",
            "Audit your personal OS regularly",
            "Maintain deep human judgment"
          ]
        },
        "progression": "Regularly audit and refine your personal operating system to maintain high quality as AI models evolve.",
        "watchOut": "Do not confuse system-wide augmentation with tool adoption alone.",
        "posture": "Keep human accountability explicit while using AI to expand capability.",
        "example": "Fiona's entire workflow is built around an agentic system she co-designed. She focuses on high-level architecture and final judgment, while the system handles data ingestion and initial synthesis.",
        "resources": {
          "deepDive": [
            {
              "label": "Becoming AI-Augmented: Chapter 6",
              "href": "https://paidar.ai/books/becoming-ai-augmented/",
              "description": "Read the specific guidance for the Augmenting stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      }
    },
    "aaosStages": {
      "diagnose": {
        "label": "Diagnose",
        "headline": "Understand how you are actually working with AI.",
        "summary": "Identify your current posture, evidence, and the gap between intention and live work.",
        "example": "Alice identifies she's in an 'Under-leveraged' posture—using AI for drafts but lacking proof of accuracy.",
        "tools": [
          "AI Posture Matrix",
          "Individual Assessment",
          "Stability Curve"
        ]
      },
      "activate": {
        "label": "Activate",
        "headline": "Build targeted capability where it's needed most.",
        "summary": "Focus on the weakest capability pillar (AI, SME, Core, or Meta skills) to improve reliability.",
        "example": "Alice focuses on 'Prompt Discipline' to ensure AI outputs are grounded in her specific domain expertise.",
        "tools": [
          "Capability Pillars",
          "Individual Skill Matrix"
        ]
      },
      "controls": {
        "label": "Controls",
        "headline": "Make your work trustworthy through personal discipline.",
        "summary": "Apply grounding and validation to every task before it is considered finished.",
        "example": "Alice implements a 'Validation Checklist' to verify every AI-assisted client email before hitting send.",
        "tools": [
          "Grounding Checklist",
          "Personal Validation Standards"
        ]
      },
      "execute": {
        "label": "Execute",
        "headline": "Run the integrated loop for all AI-assisted work.",
        "summary": "Move from ad-hoc prompting to a repeatable Draft -> Ground -> Validate -> Approve loop.",
        "example": "Alice adopts the full Draft -> Ground -> Validate loop for her weekly project reporting.",
        "tools": [
          "Individual Workflow Loop",
          "Integrity Packet"
        ]
      },
      "measure": {
        "label": "Measure",
        "headline": "Verify whether your AI work is becoming reliable.",
        "summary": "Track your personal rework rate and the depth of correction required for AI outputs.",
        "example": "Alice tracks her 'Rework Rate' and notices a 40% drop in corrections after three weeks of AAOS practice.",
        "tools": [
          "Personal Performance Dashboard",
          "Rework Log"
        ]
      },
      "scale": {
        "label": "Scale",
        "headline": "Expand your reach based on proven control stability.",
        "summary": "Apply your stable AAOS model to more complex workflows and share your success.",
        "example": "After stabilizing her report workflow, Alice expands her AAOS model to include complex project proposals.",
        "tools": [
          "Hex Model Scale Plan",
          "Workflow Expansion Roadmap"
        ]
      }
    }
  },
  "team-leader": {
    "title": "Team Leader",
    "stages": {
      "aware": {
        "label": "Aware",
        "headline": "You see the team problem, but the practice is still inconsistent.",
        "summary": "The goal is to make AI use visible and discussable.",
        "looksLike": "Different people use different tools and there is no shared way to judge quality yet.",
        "tools": {
          "type": "links",
          "items": [
            {
              "label": "Team Assessment",
              "href": "/assessment/",
              "description": "Baseline team maturity."
            },
            {
              "label": "AI Policy Draft",
              "href": "/resources/",
              "description": "Start with safety."
            }
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Create a common language for AI",
            "Identify current 'shadow' AI use",
            "Discuss quality expectations"
          ]
        },
        "progression": "Establish a shared list of AI tools and have one team discussion about their use.",
        "watchOut": "Do not let the team normalize random experimentation without standards.",
        "posture": "Improve posture by defining clear expectations for review and accountability.",
        "example": "Sarah, a team lead, sees her team using various AI tools. She starts a weekly meeting to discuss AI but hasn't set any rules yet.",
        "resources": {
          "deepDive": [
            {
              "label": "AI-Augmented Teams: Chapter 1",
              "href": "https://paidar.ai/books/ai-augmented-teams/",
              "description": "Read the specific guidance for the Aware stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "exploring": {
        "label": "Exploring",
        "headline": "The team is testing what works.",
        "summary": "The goal is to move from individual trial to shared learning.",
        "looksLike": "People share prompts and compare results, but workflows are still personal.",
        "tools": {
          "type": "list",
          "items": [
            "Team Prompt Library",
            "Shared Use Case Log",
            "Initial Review Checklists"
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Choose one team workflow to adopt",
            "Standardize the core prompt",
            "Document learned patterns"
          ]
        },
        "progression": "Agree on one specific team task to be AI-assisted and document the shared prompt.",
        "watchOut": "Do not let experimentation become fragmentation.",
        "posture": "Improve posture by standardizing the basics and documenting what the team learned.",
        "example": "Mike's team pilots AI for their customer support tickets. They learn that AI is fast but sometimes lacks the brand voice, leading them to start a shared 'Brand Voice' prompt library.",
        "resources": {
          "deepDive": [
            {
              "label": "AI-Augmented Teams: Chapter 2",
              "href": "https://paidar.ai/books/ai-augmented-teams/",
              "description": "Read the specific guidance for the Exploring stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "experimenting": {
        "label": "Experimenting",
        "headline": "The team has a few repeatable practices.",
        "summary": "The goal is to make quality and review more reliable.",
        "looksLike": "The team reuses prompts and starts to compare output quality across people.",
        "tools": {
          "type": "list",
          "items": [
            "Team Prompt Templates",
            "Peer Review Prompts",
            "Shared Workflow Notes"
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Strengthen team consistency",
            "Implement review discipline",
            "Clarify AI ownership"
          ]
        },
        "progression": "Implement a mandatory peer-review step for all AI-generated team outputs.",
        "watchOut": "Do not let good enough become the standard.",
        "posture": "Improve posture by checking assumptions and clarifying ownership.",
        "example": "Lena's team uses a shared GPT for technical documentation. They notice that the output quality varies by member, so they implement a 'Peer Review Gate' for all AI docs.",
        "resources": {
          "deepDive": [
            {
              "label": "AI-Augmented Teams: Chapter 3",
              "href": "https://paidar.ai/books/ai-augmented-teams/",
              "description": "Read the specific guidance for the Experimenting stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "integrating": {
        "label": "Integrating",
        "headline": "AI is part of the team workflow.",
        "summary": "The goal is to make AI part of a dependable workflow.",
        "looksLike": "The team uses AI for defined tasks and gets better output with less friction.",
        "tools": {
          "type": "list",
          "items": [
            "Shared Quality Gates",
            "Workflow Integration Guides",
            "Team Prompt Libraries"
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Make processes explicit",
            "Define mandatory review points",
            "Accelerate without losing quality"
          ]
        },
        "progression": "Create a team-wide library of \"Gold Standard\" prompt-output pairs.",
        "watchOut": "Do not let speed outrun review.",
        "posture": "Improve posture by defining where human review is required and where AI can accelerate work.",
        "example": "David's team has a 'Human-in-the-loop' policy for all public-facing content. AI drafts the content, but two humans must sign off on the 'Integrity Packet' before publication.",
        "resources": {
          "deepDive": [
            {
              "label": "AI-Augmented Teams: Chapter 4",
              "href": "https://paidar.ai/books/ai-augmented-teams/",
              "description": "Read the specific guidance for the Integrating stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "leading": {
        "label": "Leading",
        "headline": "You are teaching the team how to operate this way.",
        "summary": "The goal is to make the standard portable across people and projects.",
        "looksLike": "The team can explain its AI workflow and onboard new members more quickly.",
        "tools": {
          "type": "list",
          "items": [
            "Team Playbooks",
            "Onboarding Modules",
            "Leadership Guidelines"
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Teach the team standard",
            "Keep the team aligned",
            "Model responsible use"
          ]
        },
        "progression": "Train another team leader in the organization on your team's AI operating model.",
        "watchOut": "Do not assume the workflow will survive without leadership and reinforcement.",
        "posture": "Improve posture by making accountability visible and repeatable.",
        "example": "Rachel's team becomes the internal benchmark for AI-augmented design. They publish their 'Validation Ladder' for other teams to use in their own workflows.",
        "resources": {
          "deepDive": [
            {
              "label": "AI-Augmented Teams: Chapter 5",
              "href": "https://paidar.ai/books/ai-augmented-teams/",
              "description": "Read the specific guidance for the Leading stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "augmenting": {
        "label": "Augmenting",
        "headline": "The teams operating model is materially different.",
        "summary": "The goal is to sustain augmentation without losing human-centered judgment.",
        "looksLike": "AI is built into how the team delivers results, collaborates, and measures quality.",
        "tools": {
          "type": "list",
          "items": [
            "Shared Governance Stack",
            "Performance Metrics",
            "Continuous Audit Habits"
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Keep team standards strong",
            "Review team metrics regularly",
            "Maintain human-centered judgment"
          ]
        },
        "progression": "Regularly review team metrics to ensure AI is increasing velocity without sacrificing quality.",
        "watchOut": "Do not let the team confuse novelty with progress.",
        "posture": "Improve posture by maintaining clear ownership and governance.",
        "example": "Tom's team operates as a high-velocity unit where AI handles 80% of routine synthesis. The team's role has shifted to being 'System Architects' who maintain the reliability of the AI-human loop.",
        "resources": {
          "deepDive": [
            {
              "label": "AI-Augmented Teams: Chapter 6",
              "href": "https://paidar.ai/books/ai-augmented-teams/",
              "description": "Read the specific guidance for the Augmenting stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      }
    },
    "aaosStages": {
      "diagnose": {
        "label": "Diagnose",
        "headline": "Establish the team's current posture and handoff quality.",
        "summary": "Identify where reliability breaks first: skill, validation, ownership, or transfer.",
        "example": "The marketing team discovers they are 'AI Faking'—producing high volume but with increasing error rates.",
        "tools": [
          "Team Posture Matrix",
          "Team Assessment",
          "Handoff Matrix"
        ]
      },
      "activate": {
        "label": "Activate",
        "headline": "Convert team diagnostic findings into shared capability.",
        "summary": "Target capability development at the pillar that is breaking the team's system.",
        "example": "The team runs a 'Capability Workshop' to align on shared SME standards for AI-assisted content.",
        "tools": [
          "Team Capability Pillars",
          "Role-Specific Skill Tracks"
        ]
      },
      "controls": {
        "label": "Controls",
        "headline": "Embed trust into the team's operating disciplines.",
        "summary": "Define the three named roles for every handoff: Prepared By, Validated By, Approved By.",
        "example": "The leader establishes 'Named Validation' roles, requiring a senior editor to approve all AI-generated copy.",
        "tools": [
          "Validation Tier Ladder",
          "Team Operating Disciplines"
        ]
      },
      "execute": {
        "label": "Execute",
        "headline": "Standardize the team's workflow and handoff requirements.",
        "summary": "Require an Integrity Packet for every consequential handoff between team members.",
        "example": "The team integrates 'Integrity Packets' into their handoff process from design to social media.",
        "tools": [
          "Team Workflow Loop",
          "Integrity Packet Standard"
        ]
      },
      "measure": {
        "label": "Measure",
        "headline": "Track whether the team's capability is becoming reliable.",
        "summary": "Monitor handoff return rates and the consistency of quality across different roles.",
        "example": "The dashboard shows 'Handoff Return Rates' have dropped to near zero since controls were implemented.",
        "tools": [
          "Team Operating Dashboard",
          "Quality Consistency Metrics"
        ]
      },
      "scale": {
        "label": "Scale",
        "headline": "Expand AI usage based on team control evidence.",
        "summary": "Decide to expand, hold, or pause team AI adoption based on reliability data.",
        "example": "The proven marketing AAOS model is shared with the sales team as a blueprint for their own transition.",
        "tools": [
          "Team Scale Blueprint",
          "Reliability-Based Roadmap"
        ]
      }
    }
  },
  "organization-leader": {
    "title": "Organization Leader",
    "stages": {
      "aware": {
        "label": "Aware",
        "headline": "The organization knows AI matters, but adoption is uneven.",
        "summary": "The goal is to create a common view of the opportunity and the risk.",
        "looksLike": "Different teams are using AI differently and there is no shared definition of success.",
        "tools": {
          "type": "links",
          "items": [
            {
              "label": "AI Posture Matrix",
              "href": "/lens/organization-leader/aaos/",
              "description": "Classify organizational workflows."
            },
            {
              "label": "Three-tier Assessments",
              "href": "/assessment/",
              "description": "Evaluate maturity across layers."
            }
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Define the operating standard",
            "Set clear risk boundaries",
            "Establish leadership alignment"
          ]
        },
        "progression": "Publish a clear AI Acceptable Use Policy that defines high-level risk boundaries.",
        "watchOut": "Do not let disconnected pilots define the orgs future.",
        "posture": "Improve posture by setting clear accountability and risk boundaries.",
        "example": "The CEO of GTS announces an 'AI-First' initiative. The company starts tracking which departments are using AI, but policies are still in draft.",
        "resources": {
          "deepDive": [
            {
              "label": "AI-Augmented Organizations: Chapter 1",
              "href": "https://paidar.ai/books/ai-augmented-organizations/",
              "description": "Read the specific guidance for the Aware stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "exploring": {
        "label": "Exploring",
        "headline": "The organization is comparing use cases and approaches.",
        "summary": "The goal is to reduce variance and identify what should scale.",
        "looksLike": "A few teams are trying AI and leadership is gathering examples of value and risk.",
        "tools": {
          "type": "links",
          "items": [
            {
              "label": "Strategic AI Thesis",
              "href": "/resources/",
              "description": "Document strategic goals."
            },
            {
              "label": "Change Management Plan",
              "href": "/resources/",
              "description": "Prioritized initiatives."
            }
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Decide what should be standardized",
            "Identify high-priority pilots",
            "Track cross-functional value"
          ]
        },
        "progression": "Identify and launch two high-priority cross-functional pilots.",
        "watchOut": "Do not let experimentation outrun governance.",
        "posture": "Improve posture by clarifying where human oversight and control are required.",
        "example": "An insurance company pilots AI in its claims and marketing departments. They use the 'AI Posture Matrix' to identify which teams are 'AI Fakers' vs 'AI-Augmented'.",
        "resources": {
          "deepDive": [
            {
              "label": "AI-Augmented Organizations: Chapter 2",
              "href": "https://paidar.ai/books/ai-augmented-organizations/",
              "description": "Read the specific guidance for the Exploring stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "experimenting": {
        "label": "Experimenting",
        "headline": "There are repeatable pilots, but not yet a durable model.",
        "summary": "The goal is to turn experiments into a managed path.",
        "looksLike": "Teams are producing examples that can be compared and refined.",
        "tools": {
          "type": "links",
          "items": [
            {
              "label": "Governance Strategy",
              "href": "/resources/",
              "description": "Define policy and exceptions."
            },
            {
              "label": "Validation Tier Ladder",
              "href": "/lens/organization-leader/aaos/",
              "description": "Consequence-matched standards."
            }
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Translate pilots into patterns",
            "Establish central repository",
            "Avoid pilot fragmentation"
          ]
        },
        "progression": "Establish a centralized repository for pilot outcomes and lessons learned.",
        "watchOut": "Do not over-favor the loudest pilot over the most durable one.",
        "posture": "Improve posture by tying adoption to documented standards and review.",
        "example": "A logistics firm establishes its first 'AI Governance Council'. They require all high-consequence AI pilots to use a standard 'Validation Ladder' for reporting.",
        "resources": {
          "deepDive": [
            {
              "label": "AI-Augmented Organizations: Chapter 3",
              "href": "https://paidar.ai/books/ai-augmented-organizations/",
              "description": "Read the specific guidance for the Experimenting stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "integrating": {
        "label": "Integrating",
        "headline": "AI is now part of the operating model.",
        "summary": "The goal is to make AI part of a dependable workflow.",
        "looksLike": "Teams are using AI within clear guidelines and quality expectations.",
        "tools": {
          "type": "links",
          "items": [
            {
              "label": "Integrity Packet Flow",
              "href": "/lens/organization-leader/aaos/",
              "description": "Hierarchical evidence movement."
            },
            {
              "label": "Integration Loop",
              "href": "/lens/organization-leader/aaos/",
              "description": "Capture escalation and risk."
            }
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Scale with consistency",
            "Embed governance checks",
            "Maintain visible accountability"
          ]
        },
        "progression": "Embed AI governance checks into the standard project approval workflow.",
        "watchOut": "Do not let local success create inconsistent enterprise behavior.",
        "posture": "Improve posture by making governance and accountability visible.",
        "example": "A retail giant integrates AI into its supply chain decisions. Every automated decision is backed by an 'Integrity Packet' that can be audited by the risk department.",
        "resources": {
          "deepDive": [
            {
              "label": "AI-Augmented Organizations: Chapter 4",
              "href": "https://paidar.ai/books/ai-augmented-organizations/",
              "description": "Read the specific guidance for the Integrating stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "leading": {
        "label": "Leading",
        "headline": "The organization is aligning around a shared standard.",
        "summary": "The goal is to make adoption durable across functions.",
        "looksLike": "Leaders can explain the standard, and teams have a common expectation for use.",
        "tools": {
          "type": "links",
          "items": [
            {
              "label": "Trust Velocity Dashboard",
              "href": "/resources/",
              "description": "Track reliability signals."
            },
            {
              "label": "Correction Load Tracker",
              "href": "/resources/",
              "description": "Monitor skill gaps."
            }
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Teach the organizational standard",
            "Align incentives across teams",
            "Maintain explicit review points"
          ]
        },
        "progression": "Host a cross-departmental summit to align AI standards across the entire organization.",
        "watchOut": "Do not let policy exist without practical enablement.",
        "posture": "Improve posture by keeping standards explicit and reviewed.",
        "example": "A global tech firm standardizes the 'AAOS' across all business units. They use 'Trust Velocity' as a key performance indicator for their digital transformation.",
        "resources": {
          "deepDive": [
            {
              "label": "AI-Augmented Organizations: Chapter 5",
              "href": "https://paidar.ai/books/ai-augmented-organizations/",
              "description": "Read the specific guidance for the Leading stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "augmenting": {
        "label": "Augmenting",
        "headline": "The organization is materially different because of AI.",
        "summary": "The goal is to sustain augmentation without losing human-centered judgment.",
        "looksLike": "The organizations work, performance, and decision-making are changing because AI is embedded in the model.",
        "tools": {
          "type": "links",
          "items": [
            {
              "label": "Expand, Hold, Pause Logic",
              "href": "/lens/organization-leader/aaos/",
              "description": "Evidence-backed scaling."
            },
            {
              "label": "Scale Readiness Assessment",
              "href": "/lens/organization-leader/aaos/",
              "description": "Evaluate control stability."
            }
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Keep transformation human-centered",
            "Conduct annual strategic reviews",
            "Preserve oversight at scale"
          ]
        },
        "progression": "Conduct annual strategic reviews to ensure the AI operating model remains aligned with core values.",
        "watchOut": "Do not let scale erode accountability.",
        "posture": "Improve posture by preserving oversight while expanding capability.",
        "example": "An AI-native startup operates with a completely augmented workforce. Their 'Talent Architecture' is designed around human-AI partnership, allowing them to scale at 10x the industry average.",
        "resources": {
          "deepDive": [
            {
              "label": "AI-Augmented Organizations: Chapter 6",
              "href": "https://paidar.ai/books/ai-augmented-organizations/",
              "description": "Read the specific guidance for the Augmenting stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      }
    },
    "aaosStages": {
      "diagnose": {
        "label": "Diagnose",
        "headline": "Establish enterprise-wide posture and maturity baselines.",
        "summary": "Identify high-consequence workflows and map the 'Fluency vs. SME' gaps across the enterprise.",
        "example": "The executive team maps 'High-Consequence Workflows' and finds critical gaps in the financial reporting unit.",
        "tools": [
          "Enterprise Posture Map",
          "High-Consequence Workflow Registry"
        ]
      },
      "activate": {
        "label": "Activate",
        "headline": "Deploy targeted capability strategy across functions.",
        "summary": "Focus on Meta-Skills and leadership behavior to ensure AI is used with accountability.",
        "example": "The organization deploys a 'Meta-Skills' program for all directors to improve AI-augmented judgment.",
        "tools": [
          "Capability Architecture",
          "Executive Meta-Skill Tracks"
        ]
      },
      "controls": {
        "label": "Controls",
        "headline": "Institutionalize governance and trust architectures.",
        "summary": "Hardcode grounding and validation requirements into institutional policies and platforms.",
        "example": "The board approves a institution-wide 'Validation Tier Ladder' to govern all public-facing AI communications.",
        "tools": [
          "Institutional Operating Disciplines",
          "Governance Framework"
        ]
      },
      "execute": {
        "label": "Execute",
        "headline": "Standardize the enterprise operating model.",
        "summary": "Ensure the six-stage loop is the default for all consequential AI-assisted work.",
        "example": "The whole enterprise transitions to the AAOS operating model, standardizing how AI-assisted work is transferred.",
        "tools": [
          "Enterprise Workflow Integration",
          "Integrity Packet Policy"
        ]
      },
      "measure": {
        "label": "Measure",
        "headline": "Monitor enterprise reliability and control stability.",
        "summary": "Report on reliability metrics rather than just adoption volume to manage institutional risk.",
        "example": "The CEO reviews 'Control Stability' reports to verify that AI leverage isn't increasing risk.",
        "tools": [
          "Enterprise Reliability Dashboard",
          "Control Stability Metrics"
        ]
      },
      "scale": {
        "label": "Scale",
        "headline": "Govern expansion based on evidence-backed trust.",
        "summary": "Make systemic scale decisions based on the stability of the organization's controls.",
        "example": "The organization decides to 'Hold' AI expansion in HR until the new controls are verified as stable.",
        "tools": [
          "Enterprise Scale Plan",
          "Hex Model Expansion Logic"
        ]
      }
    }
  },
  "student": {
    "title": "Student",
    "stages": {
      "aware": {
        "label": "Aware",
        "headline": "You know AI will affect school and work, but it still feels abstract.",
        "summary": "The goal is to connect AI to learning and future readiness.",
        "looksLike": "You have tried AI a few times and are starting to think about how it changes study, writing, and future work.",
        "tools": {
          "type": "links",
          "items": [
            {
              "label": "Perplexity",
              "href": "https://perplexity.ai",
              "description": "For factual research.",
              "external": true
            },
            {
              "label": "ChatPDF",
              "href": "https://chatpdf.com",
              "description": "Summarize readings.",
              "external": true
            },
            {
              "label": "AAOS for Students",
              "href": "/lens/student/aaos/",
              "description": "Framework basics."
            }
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Support understanding, don't replace learning",
            "Identify one complex concept to explain",
            "Check your work against AI outputs"
          ]
        },
        "progression": "Use AI to explain one complex concept you are struggling to understand.",
        "watchOut": "Do not confuse quick answers with actual skill.",
        "posture": "Improve posture by using AI to learn better and checking your own work.",
        "example": "Sophie uses ChatGPT to explain a difficult concept in her Physics class. She likes the explanation but isn't sure if it's 100% accurate for her specific curriculum.",
        "resources": {
          "deepDive": [
            {
              "label": "Becoming AI-Augmented: Chapter 1",
              "href": "https://paidar.ai/books/becoming-ai-augmented/",
              "description": "Read the specific guidance for the Aware stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "exploring": {
        "label": "Exploring",
        "headline": "You are testing how AI can support study and projects.",
        "summary": "The goal is to find practical use without over-relying on it.",
        "looksLike": "You compare outputs, ask follow-up questions, and start to notice when AI is helpful versus distracting.",
        "tools": {
          "type": "list",
          "items": [
            "Study Guide Generators",
            "Writing & Drafting Assistants",
            "Research Support Tools"
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Pick repeatable academic tasks",
            "Generate study guides or quizzes",
            "Validate facts and sources"
          ]
        },
        "progression": "Use AI to generate a study guide or practice quiz for one of your courses.",
        "watchOut": "Do not outsource learning or skip the thinking part.",
        "posture": "Improve posture by validating facts, sources, and reasoning.",
        "example": "Liam uses AI to brainstorm essay outlines. He compares what ChatGPT and Claude suggest, noticing that one is better for structure while the other is better for creative hooks.",
        "resources": {
          "deepDive": [
            {
              "label": "Becoming AI-Augmented: Chapter 2",
              "href": "https://paidar.ai/books/becoming-ai-augmented/",
              "description": "Read the specific guidance for the Exploring stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "experimenting": {
        "label": "Experimenting",
        "headline": "AI is starting to change how you study and produce work.",
        "summary": "The goal is to make the practice stronger and more trustworthy.",
        "looksLike": "You have workflows for notes, drafts, research, or practice questions that you reuse.",
        "tools": {
          "type": "list",
          "items": [
            "Templates, study checklists, and review routines are useful now."
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Strengthen your workflow and your verification habits."
          ]
        },
        "progression": "Document how you validated the sources for one AI-assisted research project.",
        "watchOut": "Do not let convenience weaken your judgment or skill building.",
        "posture": "Improve posture by using AI as a practice partner and not a substitute.",
        "example": "Chloe has a set of prompts for summarizing her lecture transcripts. She always checks the summary against her own notes to ensure no key formulas were hallucinated.",
        "resources": {
          "deepDive": [
            {
              "label": "Becoming AI-Augmented: Chapter 3",
              "href": "https://paidar.ai/books/becoming-ai-augmented/",
              "description": "Read the specific guidance for the Experimenting stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "integrating": {
        "label": "Integrating",
        "headline": "AI is part of how you learn and work.",
        "summary": "The goal is to make AI part of a dependable workflow.",
        "looksLike": "You move from idea to draft to revision faster and more confidently.",
        "tools": {
          "type": "list",
          "items": [
            "Structured prompts and recurring study templates help a lot here."
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Make your study and work habits more repeatable."
          ]
        },
        "progression": "Develop a repeatable workflow for note-taking and exam prep using AI.",
        "watchOut": "Do not let speed erode depth or originality.",
        "posture": "Improve posture by keeping your own reasoning visible in the final result.",
        "example": "Noah uses an AI tutor to practice for his Spanish oral exams. The AI provides feedback on his grammar, and he uses a shared 'Study Integrity' checklist to ensure he's learning, not just copying.",
        "resources": {
          "deepDive": [
            {
              "label": "Becoming AI-Augmented: Chapter 4",
              "href": "https://paidar.ai/books/becoming-ai-augmented/",
              "description": "Read the specific guidance for the Integrating stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "leading": {
        "label": "Leading",
        "headline": "You are helping other students learn this way.",
        "summary": "The goal is to model responsible, effective use.",
        "looksLike": "Peers ask how you work, and your habits are a good example for others.",
        "tools": {
          "type": "list",
          "items": [
            "Shared notes, example prompts, and peer review help here."
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Teach the practice, not just the tool."
          ]
        },
        "progression": "Share your AI study workflow and validation checklist with a study group.",
        "watchOut": "Do not assume everyone is starting from the same place.",
        "posture": "Improve posture by being explicit about what AI did and what you did.",
        "example": "Zoe starts a study group where she teaches other students how to use AI for research without triggering plagiarism detectors, sharing her 'Grounding & Citation' method.",
        "resources": {
          "deepDive": [
            {
              "label": "Becoming AI-Augmented: Chapter 5",
              "href": "https://paidar.ai/books/becoming-ai-augmented/",
              "description": "Read the specific guidance for the Leading stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "augmenting": {
        "label": "Augmenting",
        "headline": "AI is changing how you learn and prepare for the future.",
        "summary": "The goal is to sustain augmentation without losing human-centered judgment.",
        "looksLike": "Your study habits, output quality, and confidence are materially different because AI is built into how you operate.",
        "tools": {
          "type": "list",
          "items": [
            "A disciplined set of study and review tools supports the work."
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Keep your learning deep while the tools get better."
          ]
        },
        "progression": "Regularly review your learning progress to ensure AI is deepening your understanding, not just saving time.",
        "watchOut": "Do not mistake tool fluency for real mastery.",
        "posture": "Improve posture by keeping ownership of the thinking and the final output.",
        "example": "James uses a personal AI agent to manage his entire learning path. He focuses on deep understanding and critical analysis, while the agent handles resource organization and initial synthesis.",
        "resources": {
          "deepDive": [
            {
              "label": "Becoming AI-Augmented: Chapter 6",
              "href": "https://paidar.ai/books/becoming-ai-augmented/",
              "description": "Read the specific guidance for the Augmenting stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      }
    },
    "aaosStages": {
      "diagnose": {
        "label": "Diagnose",
        "headline": "Understand how you are currently using AI to study.",
        "summary": "Identify whether you are using AI as a ghostwriter or a true learning partner.",
        "example": "Leo realizes he is using AI as a 'Ghostwriter'—getting answers without understanding the underlying concepts.",
        "tools": [
          "Student Assessment",
          "Learning Posture Matrix"
        ]
      },
      "activate": {
        "label": "Activate",
        "headline": "Build skills that deepen your understanding.",
        "summary": "Learn to use AI to challenge your reasoning instead of just skipping the work.",
        "example": "Leo practices 'Socratic Prompting' to use AI as a tutor that challenges his reasoning.",
        "tools": [
          "Socratic Prompting Guide",
          "Thinking-with-AI Skill Track"
        ]
      },
      "controls": {
        "label": "Controls",
        "headline": "Maintain academic rigor and personal accountability.",
        "summary": "Verify every AI explanation against your primary sources and textbook.",
        "example": "Leo creates a 'Learning Grounding' habit, fact-checking AI explanations against his textbook.",
        "tools": [
          "Personal Rigor Checklist",
          "Academic Attribution Standard"
        ]
      },
      "execute": {
        "label": "Execute",
        "headline": "Adopt a reliable AI-augmented study loop.",
        "summary": "Move from simple questions to a cycle of draft, explain, and verify.",
        "example": "Leo uses the 'Study Loop' to draft explanations, ground them in notes, and validate them with practice problems.",
        "tools": [
          "Student Study Loop",
          "Learning Integrity Packet"
        ]
      },
      "measure": {
        "label": "Measure",
        "headline": "Track your comprehension and recall velocity.",
        "summary": "Compare your mastery of topics studied with and without AI assistance.",
        "example": "Leo tracks his 'Recall Speed' and finds he understands complex topics faster with AI feedback.",
        "tools": [
          "Comprehension Dashboard",
          "Self-Assessment Log"
        ]
      },
      "scale": {
        "label": "Scale",
        "headline": "Apply your learning model to complex research.",
        "summary": "Use AI to synthesize multiple sources while maintaining your own scholarly voice.",
        "example": "Leo applies his AAOS study model to his senior thesis, managing multiple complex AI-assisted research streams.",
        "tools": [
          "Research Expansion Plan",
          "Academic Multiplier Roadmap"
        ]
      }
    }
  },
  "teacher": {
    "title": "Teacher",
    "stages": {
      "aware": {
        "label": "Aware",
        "headline": "You see the classroom pressure, but the response is still forming.",
        "summary": "The goal is to connect AI to teaching, learning, and trust.",
        "looksLike": "You are seeing student use of AI and wondering how it should change your classroom.",
        "tools": {
          "type": "links",
          "items": [
            {
              "label": "MagicSchool AI",
              "href": "https://magicschool.ai",
              "description": "Teacher-focused tools.",
              "external": true
            },
            {
              "label": "AI Policy Examples",
              "href": "/resources/",
              "description": "Syllabus guidance."
            }
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Identify help vs. threat in learning",
            "Draft one lesson plan with AI",
            "Review AI outputs for bias"
          ]
        },
        "progression": "Use AI to draft one lesson plan or assessment rubric and review it for bias.",
        "watchOut": "Do not react only with restriction.",
        "posture": "Improve posture by making expectations clear and human-centered.",
        "example": "Ms. Adams hears about AI and tries it to draft a permission slip. She sees the potential for saving time but is worried about student cheating.",
        "resources": {
          "deepDive": [
            {
              "label": "Educating the AI-Augmented: Chapter 1",
              "href": "https://paidar.ai/books/educating-the-ai-augmented/",
              "description": "Read the specific guidance for the Aware stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "exploring": {
        "label": "Exploring",
        "headline": "You are testing how AI can support teaching and feedback.",
        "summary": "The goal is to improve the work without weakening the learning.",
        "looksLike": "You try AI for lesson planning, feedback ideas, and assignment redesign.",
        "tools": {
          "type": "list",
          "items": [
            "Planning Assistants",
            "Rubric Helpers",
            "Drafting & Feedback Tools"
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Choose one high-impact workflow",
            "Design an AI-guided assignment",
            "Maintain academic rigor"
          ]
        },
        "progression": "Design one assignment that explicitly allows (and guides) student AI use.",
        "watchOut": "Do not let AI blur learning objectives or reduce rigor.",
        "posture": "Improve posture by checking whether the tool supports the learning goal.",
        "example": "Mr. Bennett uses AI to generate differentiated reading materials for his diverse classroom. He reviews the outputs to ensure the reading levels are appropriate for each group.",
        "resources": {
          "deepDive": [
            {
              "label": "Educating the AI-Augmented: Chapter 2",
              "href": "https://paidar.ai/books/educating-the-ai-augmented/",
              "description": "Read the specific guidance for the Exploring stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "experimenting": {
        "label": "Experimenting",
        "headline": "AI is beginning to shape your classroom workflow.",
        "summary": "The goal is to keep teaching reliable and consistent.",
        "looksLike": "You have a few repeatable ways to use AI for planning, feedback, or classroom design.",
        "tools": {
          "type": "list",
          "items": [
            "Templates, feedback prompts, and assignment design support are most useful."
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Turn the best experiments into a classroom standard."
          ]
        },
        "progression": "Create a standard feedback loop where AI drafts initial comments for your review.",
        "watchOut": "Do not use AI in ways that hide student thinking.",
        "posture": "Improve posture by keeping assessment aligned to learning outcomes.",
        "example": "Mrs. Chen uses a 'Lesson Plan Engine' she built with custom prompts. She runs every plan through a 'Pedagogical Check' to ensure it meets state standards.",
        "resources": {
          "deepDive": [
            {
              "label": "Educating the AI-Augmented: Chapter 3",
              "href": "https://paidar.ai/books/educating-the-ai-augmented/",
              "description": "Read the specific guidance for the Experimenting stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "integrating": {
        "label": "Integrating",
        "headline": "AI is part of how you design and manage learning.",
        "summary": "The goal is to make AI part of a dependable workflow.",
        "looksLike": "You have a clear workflow for using AI in planning, feedback, and communication.",
        "tools": {
          "type": "list",
          "items": [
            "Reusable lesson patterns, feedback templates, and review routines help maintain quality."
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Make your use transparent and repeatable."
          ]
        },
        "progression": "Build a library of AI-integrated lesson plans for your entire curriculum.",
        "watchOut": "Do not let convenience reduce the quality of student engagement.",
        "posture": "Improve posture by keeping the teachers judgment visible in the process.",
        "example": "Mr. Diaz has a 'Policy of Transparency' in his syllabus. He uses AI to provide initial feedback on student drafts, but he always provides the final grade and personal commentary.",
        "resources": {
          "deepDive": [
            {
              "label": "Educating the AI-Augmented: Chapter 4",
              "href": "https://paidar.ai/books/educating-the-ai-augmented/",
              "description": "Read the specific guidance for the Integrating stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "leading": {
        "label": "Leading",
        "headline": "You are helping others adopt a better teaching model.",
        "summary": "The goal is to make responsible AI use teachable to peers and students.",
        "looksLike": "Other teachers ask how you structure AI use and how you keep standards clear.",
        "tools": {
          "type": "list",
          "items": [
            "Shared examples, peer workshops, and classroom policies support the work."
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Teach the method and the reasoning behind it."
          ]
        },
        "progression": "Lead a professional development session for peers on responsible AI integration.",
        "watchOut": "Do not let one teachers practice become the only model.",
        "posture": "Improve posture by making the learning process explicit.",
        "example": "Ms. Evans leads a workshop for her department on 'AI-Resistant Assessments'. She shares her rubric for evaluating how students use AI in their research projects.",
        "resources": {
          "deepDive": [
            {
              "label": "Educating the AI-Augmented: Chapter 5",
              "href": "https://paidar.ai/books/educating-the-ai-augmented/",
              "description": "Read the specific guidance for the Leading stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "augmenting": {
        "label": "Augmenting",
        "headline": "AI is changing how your teaching operates at a deeper level.",
        "summary": "The goal is to sustain augmentation without losing human-centered judgment.",
        "looksLike": "Your assignments, feedback loops, and classroom routines are materially different because AI is integrated into the work.",
        "tools": {
          "type": "list",
          "items": [
            "A stable teaching system and review structure support this stage."
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Maintain rigor while using AI to expand what students can do."
          ]
        },
        "progression": "Regularly audit your assignments to ensure they still measure true student understanding in an AI-rich environment.",
        "watchOut": "Do not let AI obscure student understanding.",
        "posture": "Improve posture by keeping the human learning goal at the center.",
        "example": "Dr. Foster's entire classroom workflow is augmented. He uses AI to track individual student progress in real-time, allowing him to focus on 1-on-1 mentorship and high-level conceptual coaching.",
        "resources": {
          "deepDive": [
            {
              "label": "Educating the AI-Augmented: Chapter 6",
              "href": "https://paidar.ai/books/educating-the-ai-augmented/",
              "description": "Read the specific guidance for the Augmenting stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      }
    },
    "aaosStages": {
      "diagnose": {
        "label": "Diagnose",
        "headline": "Identify the AI posture of your classroom and curriculum.",
        "summary": "Understand which assignments are vulnerable to AI-faking and where AI can help most.",
        "example": "Mr. Smith identifies that his current essay assignments are 'Posture-Vulnerable' to AI-faking.",
        "tools": [
          "Educator Assessment",
          "Classroom Posture Map"
        ]
      },
      "activate": {
        "label": "Activate",
        "headline": "Augment your instructional design and feedback.",
        "summary": "Develop the capability to use AI for lesson plans, personalization, and rapid feedback.",
        "example": "Mr. Smith uses AI to 'Augment Lesson Design,' creating personalized practice sets for different student levels.",
        "tools": [
          "Instructional Capability Pillars",
          "Augmented Lesson Templates"
        ]
      },
      "controls": {
        "label": "Controls",
        "headline": "Ensure rigor and academic integrity.",
        "summary": "Implement standards that require students to show their AI-assisted work process.",
        "example": "The school implements 'Academic Integrity Packets,' requiring students to show the evolution of their AI-assisted work.",
        "tools": [
          "Classroom Operating Disciplines",
          "Integrity Handoff Standards"
        ]
      },
      "execute": {
        "label": "Execute",
        "headline": "Standardize your AI-augmented instructional loop.",
        "summary": "Integrate AI feedback into your classroom rituals without losing expert review.",
        "example": "The classroom adopts an 'Augmented Feedback' loop, where AI provides initial pointers before teacher review.",
        "tools": [
          "Instructional Workflow Loop",
          "Feedback Integrity Packet"
        ]
      },
      "measure": {
        "label": "Measure",
        "headline": "Monitor student growth and feedback quality.",
        "summary": "Track whether AI-augmented feedback leads to better learning outcomes for students.",
        "example": "Mr. Smith monitors 'Student Growth Velocity' to see if AI-augmented feedback is improving outcomes.",
        "tools": [
          "Learning Outcome Dashboard",
          "Instructional Reliability Metrics"
        ]
      },
      "scale": {
        "label": "Scale",
        "headline": "Scale successful instructional models across the school.",
        "summary": "Share and standardize proven AI-augmented lesson plans and feedback loops.",
        "example": "The successful AI-augmented curriculum is scaled across the entire science department.",
        "tools": [
          "Curriculum Scale Blueprint",
          "Departmental Roadmap"
        ]
      }
    }
  },
  "education-administrator": {
    "title": "Education Administrator",
    "stages": {
      "aware": {
        "label": "Aware",
        "headline": "You see the institutional challenge, but the response is still emerging.",
        "summary": "The goal is to connect AI to strategy, policy, and student outcomes.",
        "looksLike": "Different departments are moving in different directions and the institution lacks a shared path.",
        "tools": {
          "type": "list",
          "items": [
            "Policy reviews, leadership briefings, and assessment results are useful starting tools."
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Set the institutional frame before you scale use."
          ]
        },
        "progression": "Form a cross-functional AI task force to draft an institutional guidance document.",
        "watchOut": "Do not let isolated pilots define the institution.",
        "posture": "Improve posture by clarifying responsibility and oversight.",
        "example": "The Dean of a Liberal Arts college reads about AI's impact on higher ed. She convenes a town hall to discuss the institutional response.",
        "resources": {
          "deepDive": [
            {
              "label": "AI-Augmented Education: Chapter 1",
              "href": "https://paidar.ai/books/ai-augmented-education/",
              "description": "Read the specific guidance for the Aware stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "exploring": {
        "label": "Exploring",
        "headline": "The institution is comparing options and use cases.",
        "summary": "The goal is to reduce confusion and establish direction.",
        "looksLike": "You are gathering examples from faculty, staff, and students and comparing what should scale.",
        "tools": {
          "type": "list",
          "items": [
            "Guidance documents, evaluation criteria, and policy drafts are useful now."
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Choose what should be standardized across the institution."
          ]
        },
        "progression": "Pilot two different AI tools in specific departments to compare effectiveness.",
        "watchOut": "Do not let variation become the norm without oversight.",
        "posture": "Improve posture by making expectations clear across departments.",
        "example": "A higher education organization superintendent pilots AI in two middle schools. They use the 'AAOS Readiness Criteria' to compare how different schools handle student AI use.",
        "resources": {
          "deepDive": [
            {
              "label": "AI-Augmented Education: Chapter 2",
              "href": "https://paidar.ai/books/ai-augmented-education/",
              "description": "Read the specific guidance for the Exploring stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "experimenting": {
        "label": "Experimenting",
        "headline": "There are pilots, but not yet a stable operating model.",
        "summary": "The goal is to turn experiments into a repeatable institutional path.",
        "looksLike": "You have examples of AI use that can be reviewed, compared, and refined.",
        "tools": {
          "type": "list",
          "items": [
            "Pilot templates, policy checklists, and implementation notes support the work."
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Identify which pilots should become standard practice."
          ]
        },
        "progression": "Publish a set of \"Safe harbor\" guidelines for faculty experimentation.",
        "watchOut": "Do not let promising pilots bypass review or governance.",
        "posture": "Improve posture by tightening review and accountability.",
        "example": "A university provost establishes an 'AI Ethics Board'. They require all AI pilots in administrative offices to use a 'Validation Ladder' for data privacy.",
        "resources": {
          "deepDive": [
            {
              "label": "AI-Augmented Education: Chapter 3",
              "href": "https://paidar.ai/books/ai-augmented-education/",
              "description": "Read the specific guidance for the Experimenting stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "integrating": {
        "label": "Integrating",
        "headline": "AI is part of the institutions operating reality.",
        "summary": "The goal is to make AI part of a dependable workflow.",
        "looksLike": "AI is influencing teaching, administration, and student support in defined ways.",
        "tools": {
          "type": "list",
          "items": [
            "Shared platforms, policy guidance, and adoption support matter here."
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Scale with consistency and clear expectations."
          ]
        },
        "progression": "Standardize AI policy across all academic programs and departments.",
        "watchOut": "Do not let separate teams create incompatible standards.",
        "posture": "Improve posture by aligning governance with actual practice.",
        "example": "A vocational school integrates AI into its career counseling services. Every student's 'Augmented Career Path' is backed by a verified 'Integrity Packet' of their skills.",
        "resources": {
          "deepDive": [
            {
              "label": "AI-Augmented Education: Chapter 4",
              "href": "https://paidar.ai/books/ai-augmented-education/",
              "description": "Read the specific guidance for the Integrating stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "leading": {
        "label": "Leading",
        "headline": "The institution is aligning around a shared standard.",
        "summary": "The goal is to make the path durable across programs and roles.",
        "looksLike": "Leaders can explain the standard and others can follow it.",
        "tools": {
          "type": "list",
          "items": [
            "Operating model documents, training, and governance processes are central."
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Teach the standard and support adoption across the institution."
          ]
        },
        "progression": "Present the institution's AI maturity model at an educational conference.",
        "watchOut": "Do not let policy remain disconnected from implementation.",
        "posture": "Improve posture by keeping oversight practical and visible.",
        "example": "The head of a global school network standardizes AI policy across 50 campuses. They use 'Trust Velocity' to measure how quickly faculty adopt safe AI practices.",
        "resources": {
          "deepDive": [
            {
              "label": "AI-Augmented Education: Chapter 5",
              "href": "https://paidar.ai/books/ai-augmented-education/",
              "description": "Read the specific guidance for the Leading stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      },
      "augmenting": {
        "label": "Augmenting",
        "headline": "The institution is materially different because of AI.",
        "summary": "The goal is to sustain augmentation without losing human-centered judgment.",
        "looksLike": "Policies, learning, administration, and student outcomes are shaped by a durable AI operating model.",
        "tools": {
          "type": "list",
          "items": [
            "A stable governance stack and shared implementation language support this stage."
          ]
        },
        "focus": {
          "type": "list",
          "items": [
            "Keep the transformation understandable, measurable, and human-centered."
          ]
        },
        "progression": "Integrate AI readiness into the institution's long-term strategic plan and budget.",
        "watchOut": "Do not let scale reduce accountability.",
        "posture": "Improve posture by preserving oversight while expanding capability.",
        "example": "An innovative 'Micro-school' network is built on an augmented operating model. Their entire administration, from admissions to graduation, is designed for human-AI partnership.",
        "resources": {
          "deepDive": [
            {
              "label": "AI-Augmented Education: Chapter 6",
              "href": "https://paidar.ai/books/ai-augmented-education/",
              "description": "Read the specific guidance for the Augmenting stage in the official handbook.",
              "external": true
            },
            {
              "label": "Embracing Digital Transformation",
              "href": "https://embracingdigital.org/",
              "description": "Listen to Dr. Darren Pulsipher discuss AI-Augmented strategies on the podcast.",
              "external": true
            },
            {
              "label": "Research & Whitepapers",
              "href": "https://embracingdigital.org/en/digital-transformation/whitepapers/index.html",
              "description": "Deep dive into digital transformation research and whitepapers.",
              "external": true
            },
            {
              "label": "Transformation Articles",
              "href": "https://embracingdigital.org/en/digital-transformation/articles/index.html",
              "description": "Read more about digital transformation and AI strategy.",
              "external": true
            },
            {
              "label": "Expert Lectures",
              "href": "https://embracingdigital.org/en/lectures/index.html",
              "description": "Access professional lectures on AI and digital transformation.",
              "external": true
            }
          ]
        }
      }
    },
    "aaosStages": {
      "diagnose": {
        "label": "Diagnose",
        "headline": "Establish the institution's current AI posture.",
        "summary": "Map 'Shadow AI' usage among staff and identify institutional policy gaps.",
        "example": "The Superintendent finds that 'Shadow AI' usage is high among staff but lacks institutional policy alignment.",
        "tools": [
          "Institutional Assessment",
          "Policy Gap Registry"
        ]
      },
      "activate": {
        "label": "Activate",
        "headline": "Develop systemic capability and faculty readiness.",
        "summary": "Align faculty and staff capability with the institution's long-term AI strategy.",
        "example": "the institution launches a 'Faculty Capability Plan' to ensure every teacher understands AAOS basics.",
        "tools": [
          "Institutional Pillar Plan",
          "Professional Development Tracks"
        ]
      },
      "controls": {
        "label": "Controls",
        "headline": "Implement systemic governance and safety standards.",
        "summary": "Define the institutional disciplines that ensure student data privacy and academic safety.",
        "example": "The Board establishes 'Institutional Controls' for student data privacy and AI-assisted grading standards.",
        "tools": [
          "Institutional Operating Disciplines",
          "Safety Governance Framework"
        ]
      },
      "execute": {
        "label": "Execute",
        "headline": "Roll out a standardized institutional operating model.",
        "summary": "Standardize how AI is used for administration, instructional design, and student feedback.",
        "example": "the entire institution moves to a 'Standardized Operating Model' for all administrative and instructional AI use.",
        "tools": [
          "Institutional Workflow Loop",
          "institution-wide Policy Framework"
        ]
      },
      "measure": {
        "label": "Measure",
        "headline": "Track system-wide reliability and success metrics.",
        "summary": "Measure the impact of AI on overall student outcomes and institutional efficiency.",
        "example": "Administrators track 'System-Wide Reliability' to ensure AI adoption is improving institutional efficiency.",
        "tools": [
          "Institutional Dashboard",
          "Success Baseline Metrics"
        ]
      },
      "scale": {
        "label": "Scale",
        "headline": "Govern the expansion of successful AI models.",
        "summary": "Expand successful programs across schools based on control stability and evidence.",
        "example": "the institution scales its 'AAOS Success Model' to include all middle and high schools in the region.",
        "tools": [
          "Institutional Scale Plan",
          "Institution Expansion Logic"
        ]
      }
    }
  }
};