"use client";

import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaChartLine } from "react-icons/fa";
import Link from "next/link";

export default function EMACrossoverBacktestPage() {
  return (
    <div className="lift-chill-page">
      <div className="container">
        {/* Header */}
        <div className="project-header-section">
          <Link href="/#projects" className="back-link">
            ← Back to Projects
          </Link>
          <div className="project-title-section">
            <div>
              <h1>EMA Crossover Backtest</h1>
              <p className="tagline">A trading strategy backtest built in Python that uses fast and slow EMAs to create signals.</p>
            </div>
          </div>
        </div>

        {/* What it is */}
        <section className="project-section">
          <h2>What it is</h2>
          <p>
            A trading strategy backtest built in Python that uses fast and slow EMAs to create signals.
            The project includes long-only and long/short tests, trading costs, equity curves, drawdowns, Sharpe ratio, ATR filters, position sizing, parameter sweeps, triple EMA signals, and a walk-forward example.
          </p>
        </section>

        {/* Tech Used */}
        <section className="project-section">
          <h2>Tech Used</h2>
          <div className="project-tech">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Pandas</span>
            <span className="tech-tag">Matplotlib</span>
            <span className="tech-tag">yfinance</span>
            <span className="tech-tag">Jupyter Notebook</span>
          </div>
        </section>

        {/* Key Features */}
        <section className="project-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <FaChartLine className="feature-icon" />
              <h3>Fast and slow EMA signals</h3>
              <p>Generate entry and exit signals based on EMA crossovers</p>
            </div>
            <div className="feature-item">
              <FaChartLine className="feature-icon" />
              <h3>Long-only and long/short modes</h3>
              <p>Test strategies in both long-only and long/short configurations</p>
            </div>
            <div className="feature-item">
              <FaChartLine className="feature-icon" />
              <h3>Trading cost model</h3>
              <p>Realistic backtesting with trading costs included</p>
            </div>
            <div className="feature-item">
              <FaChartLine className="feature-icon" />
              <h3>Equity curve and drawdown graphs</h3>
              <p>Visualize performance with comprehensive charts</p>
            </div>
            <div className="feature-item">
              <FaChartLine className="feature-icon" />
              <h3>Sharpe ratio</h3>
              <p>Risk-adjusted performance metrics</p>
            </div>
            <div className="feature-item">
              <FaChartLine className="feature-icon" />
              <h3>Parameter sweeps</h3>
              <p>Test many EMA pairs to find optimal parameters</p>
            </div>
            <div className="feature-item">
              <FaChartLine className="feature-icon" />
              <h3>ATR-based volatility filter</h3>
              <p>Filter trades based on Average True Range</p>
            </div>
            <div className="feature-item">
              <FaChartLine className="feature-icon" />
              <h3>ATR-based position sizing</h3>
              <p>Dynamic position sizing using ATR</p>
            </div>
            <div className="feature-item">
              <FaChartLine className="feature-icon" />
              <h3>Triple EMA trend filter</h3>
              <p>Additional trend confirmation using triple EMA signals</p>
            </div>
            <div className="feature-item">
              <FaChartLine className="feature-icon" />
              <h3>Walk-forward test</h3>
              <p>Simple walk-forward testing example</p>
            </div>
            <div className="feature-item">
              <FaCode className="feature-icon" />
              <h3>Full research notebook</h3>
              <p>Complete Jupyter notebook with all analysis</p>
            </div>
          </div>
        </section>

        {/* Code Section */}
        <section className="project-section">
          <h2>Code Example</h2>
          <p>Main backtest engine function:</p>
          <div className="code-block">
            <pre><code>{`def backtest_ema_crossover(
    data, 
    fast_period=12, 
    slow_period=26, 
    long_only=True,
    trading_cost=0.001
):
    """
    Backtest EMA crossover strategy.
    
    Parameters:
    -----------
    data : pd.DataFrame
        Price data with 'Close' column
    fast_period : int
        Fast EMA period
    slow_period : int
        Slow EMA period
    long_only : bool
        If True, only long positions. If False, long/short.
    trading_cost : float
        Trading cost as fraction (e.g., 0.001 = 0.1%)
    
    Returns:
    --------
    pd.DataFrame with signals, positions, returns, equity curve
    """
    df = data.copy()
    
    # Calculate EMAs
    df['EMA_fast'] = df['Close'].ewm(span=fast_period).mean()
    df['EMA_slow'] = df['Close'].ewm(span=slow_period).mean()
    
    # Generate signals
    df['Signal'] = 0
    df.loc[df['EMA_fast'] > df['EMA_slow'], 'Signal'] = 1
    df.loc[df['EMA_fast'] < df['EMA_slow'], 'Signal'] = -1
    
    # Shift signals to avoid lookahead
    df['Signal'] = df['Signal'].shift(1)
    
    # Generate positions
    if long_only:
        df['Position'] = (df['Signal'] > 0).astype(int)
    else:
        df['Position'] = df['Signal']
    
    # Calculate returns
    df['Returns'] = df['Close'].pct_change()
    df['Strategy_Returns'] = df['Position'].shift(1) * df['Returns']
    
    # Apply trading costs
    position_changes = df['Position'].diff().abs()
    df['Strategy_Returns'] -= position_changes * trading_cost
    
    # Calculate equity curve
    df['Equity'] = (1 + df['Strategy_Returns']).cumprod()
    
    return df`}</code></pre>
          </div>
        </section>

        {/* Images Section */}
        <section className="project-section">
          <h2>Visualizations</h2>
          <div className="screenshots-grid">
            <div className="screenshot-placeholder">
              <p>EMA Price Plot</p>
              <p className="placeholder-text">[Placeholder: EMA price plot with crossover signals]</p>
            </div>
            <div className="screenshot-placeholder">
              <p>Equity Curve Plot</p>
              <p className="placeholder-text">[Placeholder: Equity curve and drawdown visualization]</p>
            </div>
          </div>
        </section>

        {/* GitHub Link */}
        <section className="project-section">
          <div className="project-links-section">
            <a 
              href="https://github.com/bigballaband/ema-backtest" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="live-site-link"
            >
              <FaGithub />
              <span>View on GitHub</span>
            </a>
          </div>
        </section>

        {/* What I Learned */}
        <section className="project-section">
          <h2>What I Learned</h2>
          <ul className="learned-list">
            <li>How EMAs turn into entry and exit rules</li>
            <li>How daily returns build an equity curve</li>
            <li>Why we shift signals to avoid lookahead</li>
            <li>How trading costs change performance</li>
            <li>Why drawdown matters as much as returns</li>
            <li>How ATR helps with filtering and sizing</li>
            <li>Why long-only and long/short behave differently</li>
            <li>How walk-forward testing helps avoid overfitting</li>
          </ul>
        </section>

        {/* Closing Reflection */}
        <section className="project-section">
          <h2>Closing Reflection</h2>
          <p className="reflection-text">
            Working through this backtest helped me see how much trading is about clean rules and steady risk. 
            I started with a basic crossover and ended with a small engine that can test many ideas. 
            This gave me a better feel for how to build and check strategy logic.
          </p>
        </section>
      </div>
    </div>
  );
}

