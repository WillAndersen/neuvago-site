#!/usr/bin/env python3
"""Installed entry. An E3 installer is separate and never called from here."""
from __future__ import annotations
import argparse,sys
from pathlib import Path
sys.dont_write_bytecode=True
sys.path.insert(0,str(Path(__file__).resolve().parent))
import runtime

def main():
    ap=argparse.ArgumentParser(description='Neuvago editorial controls — installed report-only mode')
    ap.add_argument('repo',nargs='?',default=str(Path(__file__).resolve().parents[2]))
    ap.add_argument('--phase',choices=('all','worktree','index','commit'),default='all')
    ap.add_argument('--commit',help='Full commit object ID; only used when commit phase is selected')
    ap.add_argument('--output-parent',help='External report parent; defaults to ~/Downloads')
    ap.add_argument('--acceptance',action='store_true',help='Run preserved E2 demonstrations and historical comparisons outside repo')
    args=ap.parse_args()
    if args.commit and args.phase not in ('all','commit'):ap.error('--commit requires commit phase')
    phases=('worktree','index','commit') if args.phase=='all' else (args.phase,)
    try:
        result,*_=runtime.execute(args.repo,phases,args.commit,args.output_parent,args.acceptance)
    except Exception as exc:
        print('STOPP: '+str(exc)+'; no source or Git mutation performed',file=sys.stderr);return 2
    return 0 if result['execution_status']=='COMPLETE' else 2
if __name__=='__main__':raise SystemExit(main())
